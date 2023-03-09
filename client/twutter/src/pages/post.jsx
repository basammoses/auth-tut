import React from "react";



export default function Post({ id, text, author, date, handle }) {
  
  return (
    <div key={id}>
      
      {text} {author} {`@${handle}`}</div>

  );

  

}
