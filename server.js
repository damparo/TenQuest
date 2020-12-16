// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3060;

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// handlebars template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this code will est connection to database/using credentials
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ten_questions_db",
});

//code will connect to database and report back in the console log if it does
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// GET routes 

// add "/" route, see if you can have multiple endpoints

app.get("/tenquestions", function (req, res) {

  connection.query("SELECT * FROM answers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

res.render("questions");

});

});


app.get("/responses", function (req, res){

  connection.query("SELECT * FROM answers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

  res.render("responses", { answers: data } );

});


});

// POST route

app.post("/api/answers", function(req, res){

    connection.query("INSERT INTO answers (answers) VALUES (?)", [req.body.ans2], function(err, result){

        if (err) {
            return res.status(500).end();
          }

          // res.json(data);
          res.json({ id: result.insertID});
          // console.log({ id: result.insertId });

    });

});

// Retrieve all answers
app.get("/api/answers", function(req, res) {
  connection.query("SELECT * FROM answers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});




// Setting up Express app
// const app = express();
// const PORT = 8080

// middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "styles.css")));

// // data

// const user = [
//     // {
//     //     questOne: "sample",
//     //     questTwo: "sample",
//     //     questThree: "sample",
//     //     questFour: "sample"

//     // }
// ];

// routes
// this route will become the log in route once its built
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "questions.html"));
// });

// app.get("/questions", function(req, res){
//     res.sendFile(path.join(__dirname, "questions.html"));
// });

// app.get("/responses", function(req, res){
//     res.sendFile(path.join(__dirname, "responses.html"));
// });

// app.get("/api/answers", function(req, res) {
//     return res.json(user);
//   });

// app.post("/api/answers", function(req, res){

//     const newUser = req.body;

//     user.splice(0, 4, newUser);

//     res.json(newUser);

// }

// );

// only use this route at the bottom of the route list; it catches everything after forward slash and returns 404
// app.get("*", function(req, res){
//     res.send("404 not found!");
// });

// app.listen(PORT, ()=>  console.log("App is listening on " + PORT));

// Starts server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
