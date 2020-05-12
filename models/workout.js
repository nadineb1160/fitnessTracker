const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
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

    }],

}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function() {
    let total = 0;
    this.exercises.forEach(exercise => {
        total += exercise.duration
    });
    return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
  
    