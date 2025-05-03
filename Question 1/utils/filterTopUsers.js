//this will make to get a total post of all users and filter the top 5 users
const axios = require("axios");
const getUserPosts = require("./getUserPosts.js");
const getPostComments = require("./getPostComments.js");


async function filterTopUsers(users) {
  const userCommentCounts = [];
  console.log("users are",users);

  const postArrays = await Promise.all(users.map(user => getUserPosts(user.id)));

// Loop over postArrays[i] for each user
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   const posts = postArrays[i];

//   let totalComments = 0;

//   const commentCounts = await Promise.all(posts.map(post => getPostComments(post.id)));
//   totalComments = commentCounts.reduce((sum, comments) => sum + comments.length, 0);

//   userCommentCounts.push({
//     id: user.id,
//     name: user.name,
//     commentCount: totalComments
//   });
// }
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const posts = postArrays[i];

  let totalComments = 0;

  for (let j = 0; j < posts.length; j++) {
    const comments = await getPostComments(posts[j].id);
    totalComments += comments.length;
    await new Promise((res) => setTimeout(res, 200)); // Optional delay between requests
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
