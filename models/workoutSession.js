const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSessionSchema = new Schema({
    workoutSession: {
        type: String,
        trim: true,
        required: "Please name your workout session"
    },
    username: {
        type: String,
        trim:  true,
        required: "Please insert your name"
    },
    time: {
        type: Number,
        required: "please insert the time span of the workout"
    },
    workouts: {
        type: Schema.Types.ObjectId,
        ref: "workout"
    }
})

const workoutSession = mongoose.model("workoutSession", WorkoutSessionSchema);

module.exports = workoutSession