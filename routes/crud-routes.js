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
            console.log(dbWorkout)
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
        const workout = new Workout(body)
        console.log(workout)
        db.Workout.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.delete("/api/delete/:id", (req, res) => {
        db.Workout.remove({_id: req.params.id})
    });
}





// 1. Save a exerise to the database's collection
// POST: /submit
// ===========================================
// router.post("/submit", (req, res) => {
//     db.exercises.insert(req.body, (error, data) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(data);
//         }
//     });
// });

// 2. Retrieve all exercises from the database's collection
// GET: /all
// // ====================================================
// router.get("/all", (req, res) => {
//     db.exercises.find({}, (err, data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// });

// 3. Retrieve one exercise in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
// router.get("/find/:id", (req, res) => {
//     db.exercises.findOne(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         },
//         (err, data) => {
//         if (err) {
//         res.send(err);
//         } else {
//         res.send(data);
//         }
//     });
// });

// 4. Update one exercise in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// POST: /update/:id
// ================================================================
// router.post("/update/:id", (req, res) => {
//     db.exercises.update(
//     {
//         _id: mongojs.ObjectId(res.params.id)
//     },
//     {
//         $set: {
//             title: req.body.title,
//             note: req.body.note,
//             modified: Date.now()
//         }
//     },
//     (err, data) => {
//         if (err) {
//         res.send(err)
//         } else {
//             res.send(data);
//         }
//     });
// });

// 5. Delete one exercise from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// DELETE: /delete/:id
// ==================================================================
// router.delete("/delete/:id", (req, res) => {
//     db.exercises.remove({_id: mongojs.ObjectId(req.params.id)})
// });

// 6. Clear the entire exercise collection
// DELETE: /clearall
// ===================================
// router.delete("/clearall", (req, res) => {
//     db.exercises.drop();
// });

// module.exports = router;
  