import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  posts: [
    {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId,
      required: false
    }
  ],
    
  username: String,
  
  handle: {
    type: String,
    unique: true,
    lowercase: true,
    

  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    
  },
  password: {
    type: String,

  }
  

});

export default mongoose.model("User", userSchema);