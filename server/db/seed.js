import './connection.js'
import 'dotenv/config'
import User from '../models/users.js'
import Post from '../models/posts.js'
import mongoose from 'mongoose'

await User.deleteMany({})
await Post.deleteMany({})

const myself = await User.create(
  {
    username: 'Basam',
    handle: 'basammoses'
  },
  )
  
  await Post.insertMany([
  {
    
    text: 'Hello World',
    date: '11/26/2001',
    author: myself._id

    },
    {
      text: 'Goodbye World',
      date: '11/26/2101',
      author: myself._id
    },


    

  ]
  )


const newUser = await User.create(
  {
    username: 'bathsalt',
    handle: 'bathsalt10'
  },
)
  

await Post.create(
  {
    text: 'i love taking hot showers',
    date: '10/06/2045',
    author: newUser._id
  },  
)

console.log('Done seeding database')
await mongoose.connection.close()
  

