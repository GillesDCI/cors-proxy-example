import {useState, useEffect} from 'react';


export default function NewPostForm(){
     const [title, setTitle] = useState("");
     const [content, setContent] = useState("");

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log("Sending information to the server");

         const requestOptions = {
             method:'POST',
             headers:{'Content-Type': 'application/json'},
             body: JSON.stringify({title:title, content:content})
         }

         fetch('/posts/newpost',requestOptions)
          .then(res => res.json())
     }
     
     return (
        <form onSubmit={e => {handleSubmit(e)}}>
        <label>Title:</label>
        <br />
        <input 
          name='title' 
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <label>Content:</label>
        <br />
        <input 
          name='content' 
          type='text' 
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <br />
        <input 
          type='submit' 
          value='Add Post' 
        />
      </form>
     )
}