//this will make to get a total post of all users and filter the top 5 users
const axios = require("axios");



async function getUserPosts(userId) {
  try {
    let url="http://20.244.56.144/evaluation-service";
    const response = await axios.get(`${url}/users/${userId}/posts`);
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

async function filterTopUsers(users) {
  const userCommentCounts = [];

  for (const user of users) {
    const posts = await getUserPosts(user.id);

    let totalComments = 0;

    for (const post of posts) {
      const comments = await getPostComments(post.id);
      totalComments += comments.length;


      //counting total comments for each user
    }

    userCommentCounts.push({
      id: user.id,
      name: user.name,
      commentCount: totalComments
    });
  }


  userCommentCounts.sort((a, b) => b.commentCount - a.commentCount);

  return userCommentCounts.slice(0, 5);
}

module.exports = filterTopUsers;
