import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingComponent from "../Components/Loading";
import PostCard from "../Components/Card";
let tempobj=[
    {
        "id": 857,
        "userid": 8,
        "content": "Post about sun",
        "commentCount": 2
    },
    {
        "id": 200,
        "userid": 16,
        "content": "Post about x-ray",
        "commentCount": 2
    },
    {
        "id": 990,
        "userid": 1,
        "content": "Post about sunflower",
        "commentCount": 1
    },
    {
        "id": 465,
        "userid": 1,
        "content": "Post about queen",
        "commentCount": 1
    },
    {
        "id": 507,
        "userid": 1,
        "content": "Post about zebra",
        "commentCount": 1
    }
]

function PopularPost() {
  useEffect(() => {
     fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [isLoading,setisLoading]=useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts?type=popular");
      setisLoading(false);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
if(isLoading)return <LoadingComponent/>
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Popular Posts</h1>
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

export default PopularPost;
