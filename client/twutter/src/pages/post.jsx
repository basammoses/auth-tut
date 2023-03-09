import React from "react";








export default function Post({ id, text, author, date, handle }) {
  
  return (
    <div key={id}> {text} {author}
      
      <a href={`http://localhost:3001/user${handle}`}>
      @{handle}
      </a>
      
     
      
      <hr />
    
    </div>

  );

  

}
