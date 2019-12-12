const express = require("express");
const exphbs = require("express-handlebars");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myDatabase", { useNewUrlParser: true });
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/continueWorkout", (req, res) => {
    res.render("continueWorkout");
});
app.get("/newWorkout", (req, res) => {
    res.render("newWorkout");
});


app.post("/newWorkout", ({body}, res) => {
    console.log(body);
    db.Note.create(body)
    .then((user) => {
        console.log(user);
      res.redirect("/continueWorkout");
    });
    //res.render("auth/register");
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
