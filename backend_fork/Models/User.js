import mongoose from 'mongoose'

const {Schema, model} = mongoose;

const avatarSchema = new Schema({
  originalname: { type: String, required: true },
MimeType: { type: String, required: true },
filename: { type: String, required: true },
path: { type: String, required: true },
size: { type: String, required: true }


})

const userSchema = new Schema(  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minLength: 6 },
    email: { type: String, required: true, unique:true },
    avatar: {type: avatarSchema, required: false}
  },
  {
    toJSON: {
      transform: function (doc, userObj) {
        delete userObj.password;
        delete userObj.__v;
        return userObj;
      },
    },
    timestamps:true,
  })

  const User = model("User", userSchema)

  export default User