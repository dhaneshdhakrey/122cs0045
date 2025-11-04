const axios = require("axios");
const getAllUsers = require("./getUsers.js");
const getUserPosts = require("./getUserPosts.js");
const getPostComments = require("./getPostComments.js");

const url = "http://20.244.56.144/evaluation-service";





async function filterTopPosts(type) {
  const users = await getAllUsers();
  let allPosts = [];

  
  for (const user of users) {
    const posts = await getUserPosts(user.id);
    allPosts = allPosts.concat(posts);
  }

  if (type === "latest") {
    
    allPosts.sort((a, b) => b.id - a.id);
    // return allPosts.slice(0, 5);
    return allPosts.slice(0,10);
  }

  if (type === "popular") {
    const postWithCommentCounts = [];

for (const post of allPosts) {
  const comments = await getPostComments(post.id);
  postWithCommentCounts.push({
    ...post,
    commentCount: comments.length,
  });
  
 
 
}
  
    // Sort by comment count descending
    postWithCommentCounts.sort((a, b) => b.commentCount - a.commentCount);
  
    // Return top 5
    return postWithCommentCounts.slice(0, 5);
  }

  throw new Error("Invalid type");
}

module.exports = filterTopPosts;
