const express = require("express");
const { getPost, getPosts } = require("../controllers/PostController");


const router = express.Router();
// Create a Post

// Get post based on query
router.get("/search/query", async (request, response) => {
    // Get the query from the request body
    let query = request.body.query;

    // Use the query in the POST CRUD operation
    let result = await getPost(query);
    
    // Return the result
    response.json({
        data: result
    });
});

// get one Post by id
router.get("/search/:postId", async (request, response) => {
    console.log(`getting post with id: ` + request.params.postId);

    let result = await getPost({_id: request.params.postId});
    console.log("Found it: " + result);

    response.json({
        data: result
    });

});

// Get all posts
router.get("/all", async (request, response) => {
    let result = await getPosts({});
    console.log("All Posts: " + JSON.stringify(result));

    response.json({
        data: result
    });
})



module.exports = router;

