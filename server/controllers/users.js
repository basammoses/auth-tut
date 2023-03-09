import User from '../models/users.js'
import Post from '../models/posts.js'


export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    
    res.status(200).json(users);

  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function getUserByHandle(req, res) {
  const { handle } = req.params;
  try {
    const user = await User.findOne({ handle });
   

    res.status(200).json(user);

  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function getUserPostsByHandle(req, res) {
  const { handle } = req.params;
  try {
    const user = await User.findOne({ handle })
    // @ts-ignore
    const posts = await Post.find({ author: user._id })

    res.status(200).json(posts);

  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function addUserPostsToProfile(req, res) {
  const { handle } = req.params;
  try {
    const user = await User.findOne({ handle })
    const posts = await Post.find({ author: user._id })
    user.posts = posts.map(post => `${post._id}`)
    await user.save()
    res.status(200).json(user);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}



export async function createUser(req, res) {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  }
  catch (err) {
    res.status(409).json({ message: err.message });
  }
}

export async function deleteUserByHandle(req, res) {
  const { handle } = req.params;
  try {
    await User.findOneAndDelete(handle);
    res.status(200).json({ message: "User deleted successfully" });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function updateUserByHandle(req, res) {
  const { handle } = req.params;
  const user = req.body;
  try {
    await User.findByIdAndUpdate({ handle }, user);
    res.status(200).json({ message: "User updated successfully" });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}