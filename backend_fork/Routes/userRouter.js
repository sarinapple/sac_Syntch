import { Router } from "express";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
// import multer from 'multer'

const router = Router();
// THIS FUNCTIONALITY IS CONTROLLER
router
  .post("/register", async (req, res, next) => {
    try {
      const hashedPW = await hash(req.body.password, 10);
      // ADDING HASHED PW TO REQUEST'S BODY
      req.body.password = hashedPW;
      const newUser = await User.create(req.body);
      res.send(newUser);
    } catch (error) {
      // CREATE AND DELIVER THIS ERR TO MAIN ERROR HANDLER IN SERVER.JS
      next(error);
    }
  })
  .post("/login", async (req, res, next) => {
    console.log(req.body);

    try {
      const user = await User.findOne({
        username: req.body.username,
      });
      if (!user) {
        res.json({success: false, message:"Username or password is incorrect"})
        // next("Username or password is incorrect");
      } else {
        const goodLogin = await compare(req.body.password, user.password);
        if (!goodLogin) {
            res.json({success: false, message: "Username or password is incorrect"})
        //   next("username or password is wrong!");
        } else {
          const token = jwt.sign({ id: user._id }, process.env.SECRET);
          console.log(token);

          res.send({success: true, user, token });
        }
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .get("profile/:filename", async (req, res, next) => {
    try {
      const syntcher = await User.findOne({
        "avatar.filename": req.params.filename,
      });
      const absAvatarPath = path.resolve("./", blogPerson.avatar.path);
      res.sendFile(absAvatarPath);
    } catch (error) {
      next(createError(400, err.message));
    }

    // }).get('/scoreboard', async(req,res,async)=>{

    // }).get('/level', async(req,res,async)=>{
  });

export default router;
