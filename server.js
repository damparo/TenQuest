// Dependencies
const express = require("express");
const path = require("path")

// Setting up Express app
const app = express();
const PORT = 8080

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// data

const user = [
    // {
    //     questOne: "sample",
    //     questTwo: "sample",
    //     questThree: "sample",
    //     questFour: "sample"

    // }
];

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

app.get("/api/answers", function(req, res) {
    return res.json(user);
  });

app.post("/api/answers", function(req, res){

    const newUser = req.body;

    user.splice(0, 4, newUser);


    res.json(newUser);

}
// app.put("/api/answers", function(req, res){

//     const newUser = req.body;

//     // user.push(newUser);
//     newUser = user

//     res.json(newUser);

// }




);



// only use this route at the bottom of the route list; it catches everything after forward slash and returns 404
app.get("*", function(req, res){
    res.send("404 not found!");
});

app.listen(PORT, ()=>  console.log("App is listening on " + PORT));