import React, { useState } from "react";
import { insertPost } from "../api/posts";


export default function New() {
  
  
  const [username, setUsername] = useState("");
  
  const [twut, setTwut] = useState("");
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (twut.length > 0) {
      
      insertPost({
        twut,
        username,
      }
      ).then((res) => {
        console.log(res)
        ;
      });
      console.log(twut,username);
    }
  };

  return (
    <div>
      <h1>New Twut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
        <input type={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        </div>
        <textarea
          value={twut}
          onChange={(e) => setTwut(e.target.value)}
          placeholder="What's happening?"
        />
          <div>
            </div>
          <button type="submit">Twut</button>
        </div>
      
      </form>
    </div>
  );
}
