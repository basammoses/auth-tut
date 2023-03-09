import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  posts: [
    {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
    
  username: String,
  handle: {
    type: String,
    unique: true,
    lowercase: true
  }
});

export default mongoose.model("User", userSchema);