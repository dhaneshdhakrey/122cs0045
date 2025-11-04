// getUsers.js
const axios = require("axios");
const getauth=require("./auth.js");



async function getAllUsers() {
  try {
    let auth=getauth();
    console.log(auth);
    const url = "http://20.244.56.144/evaluation-service/users";
    const response = await axios.get(url,{
      headers: {
        authorization:auth
    }});
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
