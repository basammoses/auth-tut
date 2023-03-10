import jwt from 'jsonwebtoken';
import User from '../models/users.js';
import posts from '../models/posts.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';



const saltRounds = 10;



export async function loginUser(req, res) {
  try {
    const { email, password } = await req.body;
    if (!email || !password) {
      return res.status(400).send('Missing required fields');
    }
    else {
      const user = await User.findOne({ email });
      console.log(user )
      if (!user) {
        return res.status(400).send('Incorrect email or password');
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).send('Incorrect email or password');
      }
      const token = jwt.sign({ user }, 'secret', {
        expiresIn: '1d',
      });
      const handle = user.handle
      const id = user._id
      res.status(200).json({ token, handle, id} );
    }
    

  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in user. Please try again later.');
  }

}


export async function createUser(req, res) {
  const { handle, email, password } = req.body
  try {
    console.log(handle, email, password)
    if (!handle || !email || !password) {
      return res.status(400).send('Missing required fields');
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      handle, email, password: hash
    });
    const token = jwt.sign({ user }, 'secret', {
      expiresIn: '1h',
    });
    res.status(201).json({ user, token });

    
  } catch (err) {
    console.error(err);
    res.status(500).send('Error signing up user. Please try again later.');
  }
}

export async function logOut(req, res) {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).send('Missing required fields');
    }
    else {
      res.status(200).json({ token: null });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging out user. Please try again later.');
  }
}


 