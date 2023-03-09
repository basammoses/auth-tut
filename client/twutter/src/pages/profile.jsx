import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByHandle } from "../api/users";
import Post from "./post";


export default function Profile() {
  const params = useParams();
  const [profile, setProfile ] = useState({})
  //console.log(params.handle);

  useEffect(() => {
    getUserByHandle(params.handle).then((res) => {
      setProfile(res.data);
    });
  console.log(getUserByHandle(params.handle));
  }, [params.handle]);
  
  
  

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h2>{profile.username}</h2>
      <h3>{profile.handle}</h3>
      <hr />
      {profile.posts?.map((el) => (
        <Post
          key={el._id}
          text={el.text}
          username={profile.username}
          handle={profile.handle}
        />
      ))}
    
    </div>
  );
}
