import React, { useState } from "react";
import { insertPost } from "../api/posts";


export default function New(onClick) {

  
  
  
  const [twut, setTwut] = useState("");
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (twut.length > 0) {
      
      insertPost({
        twut
      }
      ).then((res) => {
        console.log(res)
        ;
      });
      console.log(twut);
      window.location.reload();
    }
  };

  return (
    <div>
      <h1>New Twut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
        </div>
        <textarea
          value={twut}
          onChange={(e) => setTwut(e.target.value)}
          placeholder="What's happening?"
        />
          <div>
            </div>
          <button onClick={window.location.reload}
            type="submit">Twut</button>
        </div>
      
      </form>
    </div>
  );
}
