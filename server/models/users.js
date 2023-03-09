import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  username: String,
  handle: {
    type: String,
    unique: true,
    lowercase: true
  }
});

export default mongoose.model("User", userSchema);