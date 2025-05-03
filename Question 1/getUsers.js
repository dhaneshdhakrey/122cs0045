// getUsers.js
const axios = require("axios");



async function getAllUsers() {
  try {
    const url = "http://20.244.56.144/evaluation-service/users";
    const response = await axios.get(url);
    const usersMap = response.data.users; 

    
    const users = Object.entries(usersMap).map(([id, name]) => ({
      id,
      name,
      //converting to array of objects
    }));

    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw new Error("Failed to fetch users");
  }
}

module.exports = getAllUsers;
