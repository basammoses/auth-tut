import mongoose from "mongoose";
//import { userSchema } from "./users.js";


const postSchema = new mongoose.Schema({
  author: {
    ref: "User",
    type: mongoose.Schema.Types.String
  },
  text: String,
  date: Date,
});

export default mongoose.model("Post", postSchema);

  