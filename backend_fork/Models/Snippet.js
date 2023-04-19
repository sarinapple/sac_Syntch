import mongoose from "mongoose";
const { Schema, model } = mongoose;

const snippetSchema = new Schema({
  level: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  desription: { type: String },
  question: { type: String, required: true },
});

const Snippet = model("snippet", snippetSchema);

export default Snippet;
