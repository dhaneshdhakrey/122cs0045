const axios = require("axios");
const getauth=require("./auth.js");
// Function to get comments for a specific post
async function getPostComments(postId) {
  try {
    let auth=getauth();
    const url = "http://20.244.56.144/evaluation-service";
    const response = await axios.get(`${url}/posts/${postId}/comments`,{
        headers:{
            authorization:auth
        }
    });
    
    return response.data.comments;
  } catch (err) {
    // console.error(`error fetchig comments for postid ${postId}:`, err.message);
     console.error("error fetchig comments", err.message);
    return [];
  }
}
module.exports = getPostComments;