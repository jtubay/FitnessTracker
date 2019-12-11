const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    nameofworkout: String,
    reps: Number
})

const workout = mongoose.model("workout", workoutSchema)
module.exports = workout; 