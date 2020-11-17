// Dependencies
const express = require("express");
const path = require("path")

// Setting up Express app
const app = express();
const PORT = 8080

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
// this route will become the log in route once its built
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "questions.html"));
});

app.get("/questions", function(req, res){
    res.sendFile(path.join(__dirname, "questions.html"));
});
app.get("/responses", function(req, res){
    res.sendFile(path.join(__dirname, "responses.html"));
});
// app.post("/", function(req, res){
//     res.send("welcome!");
// });



// only use this route at the bottom of the route list; it catches everything after forward slash and returns 404
app.get("*", function(req, res){
    res.send("404 not found!");
});

app.listen(PORT, ()=>  console.log("App is listening on " + PORT));