import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
  author: String,
  text: String,
  date: Date,
});

export default mongoose.model("Post", postSchema);

  