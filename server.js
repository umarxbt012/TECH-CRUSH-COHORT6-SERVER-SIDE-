// step 1: import express module
const express=require('express');

// step 2: create an express application instance
const app=express();

const studentInfo=[
   { name:"alice", age:20, grade:"A"},
   { name:"Bob", age:21, grade:"B"},
   { name:"Charlie", age:22, grade:"C"},
]

app.get("/all-data", function(req, res){
    res.json(studentInfo);
})

// step 3: define a route handler for the root URL for GET requests to /
app.get('/',function(req,res){
    res.send('Hello World,welcome to express js!');
});

app.get("/about", function(req, res){
    res.send("This is the about page")
})

// step 4: listening on port 3000 for incoming requests
// this is always at the end of the server file
app.listen(3000,function(){
    console.log('Server is running on port 3000');
});