const axios = require('axios');
const getauth=require("./auth.js");
async function getUserPosts(userId) {
  try {
    let auth=getauth();
    const url = "http://20.244.56.144/evaluation-service";
    const response = await axios.get(`${url}/users/${userId}/posts`,{
        headers:{
            authorization:auth
        }
    });
    // console.log("response is",response.data.posts);
    return response.data.posts || [];
  } catch (err) {
    console.error(`Error fetching posts for user ${userId}:`, err.message);
    return [];
  }
}
module.exports = getUserPosts;