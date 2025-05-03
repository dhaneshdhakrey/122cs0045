const axios = require("axios");
const getAllUsers = require("./getUsers");

const BASE_URL = "http://20.244.56.144/evaluation-service";

async function getUserPosts(userId) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
    return response.data.posts || [];
  } catch (err) {
    console.error(`Error fetching posts for user ${userId}:`, err.message);
    return [];
  }
}

async function getPostComments(postId) {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data.comments || [];
  } catch (err) {
    console.error(`Error fetching comments for post ${postId}:`, err.message);
    return [];
  }
}

async function filterTopPosts(type) {
  const users = await getAllUsers();
  let allPosts = [];

  // Collect all posts from all users
  for (const user of users) {
    const posts = await getUserPosts(user.id);
    allPosts = allPosts.concat(posts);
  }

  if (type === "latest") {
    // Sort by ID descending (assuming higher ID = newer)
    allPosts.sort((a, b) => b.id - a.id);
    return allPosts.slice(0, 5);
  }

  if (type === "popular") {
    let maxCount = 0;
    const postWithCommentCounts = [];

    for (const post of allPosts) {
      const comments = await getPostComments(post.id);
      const count = comments.length;

      if (count >= maxCount) {
        maxCount = count;
        postWithCommentCounts.push({ ...post, commentCount: count });
      }
    }

    // Filter to only return posts with max comment count
    return postWithCommentCounts.filter(p => p.commentCount === maxCount);
  }

  throw new Error("Invalid type");
}

module.exports = filterTopPosts;
