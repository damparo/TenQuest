const express = require("express");
const app = express();
const PORT = 8080

// middleware


// routes
app.get("/", function(req, res){
    res.send("welcome!");
});
app.post("/", function(req, res){
    res.send("welcome!");
});
app.put("/", function(req, res){
    res.send("welcome!");
});
app.delete("/", function(req, res){
    res.send("welcome!");
});


// only use this route at the bottom of the route list; it catches everything after forward slash and returns 404
app.get("*", function(req, res){
    res.send("404 not found!");
});

app.listen(PORT, ()=>  console.log("App is listening on " + PORT));