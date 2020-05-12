const db = require("../models");
// const router = require("express").Router();
const path = require("path")
const logger = require("morgan");

module.exports = function(app) {

    // Get Last Workout
    app.get("/api/workouts" , (req, res) => {
        console.log("get last workout");
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
    });

    // Get Workouts in Range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
        
    })

    // Add exercise
    app.put("/api/workouts/:id", (req, res) => {
        console.log("add exercise")
        db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });


    // Create Workout
    app.post("/api/workouts", ({ body }, res) => {
        console.log("create workout");
        const workout = new db.Workout(body);
        db.Workout.create(workout) 
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

}