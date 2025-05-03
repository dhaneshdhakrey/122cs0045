const getAllUsers=require("./utils/getUsers.js");
const filterTopUsers=require("./utils/filterTopUsers.js");
async function TopUsers(req,res){
    try {
        const users = await getAllUsers();
        console.log(users);
        // Filter top users based on comments
        const topUsers = await filterTopUsers(users); 
        
        res.status(200).json(topUsers);
        //returning name and id of the usersa and total comment
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

}
module.exports=TopUsers;