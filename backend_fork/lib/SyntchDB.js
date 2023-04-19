import mongoose from "mongoose";
import {log} from 'console'

const connect = ()=>{
    const {DB_USER,
        DB_PASS,
        DB_NAME,
        DB_URI, PORT} = process.env

        const cs = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URI}/${DB_NAME}`

        mongoose.connect(cs).then(()=>log(`[DB] is connected to PORT ${PORT}`)).catch(error =>{log.error})
}

export default connect