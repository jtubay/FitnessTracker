/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String,
  user: String
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Please name your workout session"
    },
    body: {
        type: String,
        trim:  true,
        required: "Please insert your name"
    },

    name: {
        type: String,
        trim:  true,
        required: "Please insert your name"
    }
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note
