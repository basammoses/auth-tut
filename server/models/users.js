import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  username: String,
  handle: {
    type: String,
    unique: true,
    lowercase: true
  },
  posts: [{
    ref: "Posts",
    type: mongoose.Schema.Types.ObjectId

  }]
});

export default mongoose.model("User", userSchema);