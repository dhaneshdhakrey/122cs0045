import React, { useState, useEffect } from "react";
import {BrowserRouter} from "react-router-dom"
import axios from "axios";
import PostCard from "../Components/Card";
import LoadingComponent from "../Components/Loading";
function Feed() {
  useEffect(() => {
    fetchPosts();
    
    const interval=setInterval(fetchPosts,5000)
    return ()=>clearInterval(interval);
  }, []);

  const [posts, setPosts] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts?type=latest");
      setIsLoading(false);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  if(isLoading){
    return<LoadingComponent/>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your Feed</h1>
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          content={post.content} 
          author={post.userid} 
          commentCount={post.commentCount} 
        />
      ))}
    </div>
  );
}

export default Feed;
