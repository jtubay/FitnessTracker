const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessDB", { useNewUrlParser: true });



app.get("/notes", (req, res) => {
  db.Note.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});



app.post("/submit", ({ body }, res) => {
  db.Note.create(body)
    .then(dbUser => {
      res.json(dbUser);
     
    })
    .catch(err => {
      res.json(err);
    });
   
});
app.get("/workingOn", (req, res) => {
    db.Note.find({}, (error, found) => {
      if (error) {
        console.log(error);
      } else {
        res.json(found);
      }
    });
  });


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
