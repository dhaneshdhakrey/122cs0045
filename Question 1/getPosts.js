
async function getPosts(type) {
    try {
        
        let url = `http://20.244.56.144/evaluation-service/`;
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = getPosts;