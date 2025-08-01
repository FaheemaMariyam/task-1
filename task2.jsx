import React,{useState,useEffect} from 'react'

function Fetching() {
    const[post,setPost]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/quotes")
        .then(res=>res.json())
        .then(post=>setPost(post.quote.splice(0,10)))
    },[])
  return (
    <div>
        
            {post.map((post)=>(
            <div key={post.id}><h1>{post.quote}</h1></div>))}
        
      
    </div>
  )
}

export default  Fetching;
