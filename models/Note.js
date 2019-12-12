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
        
    },
    body: {
        type: String,
        trim:  true,
        
    },

    name: {
        type: String,
        trim:  true,
       
    }
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note
