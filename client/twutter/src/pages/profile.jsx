import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Profile() {
  const params = useParams();
  const [profile, setProfile ] = useState({})


  useEffect(() => {
    fetch(`/api/user/${params.handle}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [params.handle]);

  
  
  

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h2>{profile.username}</h2>
      <h3>{profile.handle}</h3>
    
    </div>
  );
}
