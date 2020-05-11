const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
        required: "Day is Required"
    },

    exercises: [{
        type: {
            type: String,
            required: "Type is Required"
        },
        name : {
            type: String,
            required: "Name is Required"
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }

    }]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
  
    