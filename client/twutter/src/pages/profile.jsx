import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByHandle } from "../api/users";
import Post from "./post";
import {verifyToken} from '../api/users.js';
import New from "./new";


export default function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState({})
  const [isVerified, setIsVerified] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
 
  //console.log(params.handle);


  useEffect(() => {
    getUserByHandle(params.handle).then((res) => {
      setProfile(res.data);
      setIsUpdated(true)
  
    });
  }, [params.handle, isUpdated]);

  

    




  async function verify() {
    
    const info = await verifyToken()
    
    console.log(info)
    if (info.handle === params.handle) {
      setIsVerified(true)
    }
  
  }
  
  useEffect(() => {
    verify();
    console.log(isVerified)
  }, []);



  
 
  

  return (
    <div className="profile">
      <h1>
        <a href="http://localhost:3001/">Home</a>
        </h1>
      <h2>{profile.username}</h2>
      <h3>{profile.handle}</h3>
      <hr />
      
        <div>
        <h4>Posts</h4>
      {profile.posts?.map((el) => (
        <Post
          key={el._id}
          text={el.text}
          username={profile.username}
          handle={profile.handle}
          id={el._id}
        />
        
        
      ))}
        {isVerified && <New
        />} 

       
          
      </div>
      

      
    </div>
  
  );
  
}
