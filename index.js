const express = require("express") ;
const app = express();
app.get("/", function(req,res){
    res.send("Server is up and running");
})
// simulated in-memory database
const users=[
    {id:1, name: "alice", email:"alice@example.com"},
    {id:2, name: "bob", email:"bob@example.com"},
    ];


// get all users
//static routing
app.get("/users", function(req,res){
      res.status(200).json(users);
})
// get a single user by ID
// Dynamic routing because there is the presence of /:
app.get("/users/:id", function(req,res){
    // req has many methods so this time we are using the .params(Which means to access parameters) which then accesses .id to help in the routing
    const id = parseInt(req.params.id);
    /*this is the function that does the finding of the id using the .find method and in line 25 checks whether the id in the array user is the same as the one passed in the route by the user*/
    const user = users.find(function(u){
        return u.id === id;
    })
    if(!user){
        return res.status(404).json({error: "User not found!"});

    }
    res.status(200).json(user);
});
const port =8080
app.listen(port, function()
{
    console.log("server is listening on "+ port)
})