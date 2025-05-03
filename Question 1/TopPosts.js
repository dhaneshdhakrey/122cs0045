const axios = require('axios');
async function TopPosts(req, res) {
    try {
        let type=req.query.type;
        
        
    } catch (error) {
        console.error("Error fetching top posts:", error);
         // Rethrow the error to be handled by the calling function
    }
}
module.exports=TopPosts;