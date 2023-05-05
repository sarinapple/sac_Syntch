import express from 'express'
import {config} from 'dotenv'
import connect from './lib/SyntchDB.js'
import {log} from 'console'
import userRouter from './Routes/userRouter.js'
import tryRouter from './Routes/tryRouter.js'
import contentRouter from './Routes/contentRouter.js'
import cors from 'cors'
config()
connect()

const server = express()
server.use(cors({origin: '*'}))
server.use(express.json())
server.use(express.urlencoded({extended:false}))

// ROUTE FOR ENDLESS USER
server.use('/api/v1/user', userRouter)
// ROUTE FOR LIMITED USER
server.use('/api/v1/try', tryRouter)
// ROUTE FOR GAME CONTENTS
server.use('/api/vi/contents', contentRouter)

// server.get('/api/howToPlayGame', (req,res)=>{
// res.json({name: "sarintest",
// description:" test w/ mostafa Apr 17"})
// })

// GLOBAL ERROR HANDLER
server.use((err, req, res, next)=>{
    res.status(err.status || 500).send({message:err.message || "Something went wrong :("}) // emoji code here
})
// DEFINE PORT
const port = process.env.PORT || 1999
// PORT LISTENER
server.listen(port, ()=>{
    log(`Server is now running on \t http://localhost:${port}`)
})
