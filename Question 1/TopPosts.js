const axios = require('axios');
const filterTopPosts=require('./utils/filterTopPosts.js')
async function TopPosts(req, res) {
    try {
        let type=req.query.type;
        console.log("type is",type);
        let temp=await filterTopPosts(type);
        

        res.status(200).json({
            document:temp,
            status1:"Done"
        });
        
    } catch (error) {
        console.log("Error fetching top posts:", error);
        res.status(500).json({ error: "smtg wrong at Top posts" });
    }
}
module.exports=TopPosts;