import './connection.js'
import 'dotenv/config'
import User from '../models/users.js'
import Post from '../models/posts.js'
import mongoose from 'mongoose'

await User.deleteMany({})
await Post.deleteMany({})

const myself = await User.create(
  {
    posts: [],
    username: 'Basam',
    handle: 'basammoses',
    email: 'basammoses@gmail.com',
    password: 'password'
    
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
  ).then((posts) => {
    myself.posts = posts.map(post => post._id)
    myself.save()
  })


const newUser = await User.create(
  {
    posts: [],
    username: 'bathsalt',
    handle: 'bathsalt10',
    email: 'bathsalt@gmail.com',
    password: 'password'

  },
)

await Post.insertMany([
  {
    author: newUser._id,
    text: 'Hello World',
    date: '11/26/2001',
  },
  {
    author:newUser._id,
    text: 'Goodbye World',
    date: '11/26/2101',
  },

]
).then((posts) => {
  newUser.posts = posts.map(post => post._id)
  newUser.save()
}).then(() => {
  console.log('Done seeding database')
})
    
  





  

