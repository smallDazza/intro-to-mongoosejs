// Purpose:

// Configure the server
// Defining routes, middlewares, CORS, debug logger setups, db connections, etc.

const express = require("express");

// Instance of the express for configuration
const app = express();

app.use(express.json());

// Server app config goes here...
//
const PostRoute = require("./routes/PostRoute.js")
app.use("/posts", PostRoute);


// syntax  is: app.verb(path, callback)
app.get("/", (request, response) => {
    //response.send("<h1>Hello World</h1>");
    response.json({
        message: "Hello Dazza...."
    });
});

// Export the server for use in other parts of the project
module.exports= {
    app
}