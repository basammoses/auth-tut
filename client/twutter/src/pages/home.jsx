import React, { useEffect, useState } from "react";
import Post from "../pages/post";
import { getAllPosts } from "../api/posts";

export default function Home() {
const [twuts, setTwuts] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      setTwuts(res.data);
    }
    );
  }, []);

  console.log (twuts);
  
  return (
    <div>
      <h1>Home</h1>
      {twuts.map((el) => (
        <Post
          id={el._id}
          text={el.text}
          key={el._id}
          handle={el.author.handle}
          author={el.author.username}
        />
      )
      )}
     
    </div>
  );
}