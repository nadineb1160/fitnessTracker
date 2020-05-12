# Fitness Tracker

This is a workout tracker that users Mongo database with a Mongoose scheme and handle routes with Express. 

## User Story

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Technologies:

- MongoDB
- Node
- Express
- Javascript

### Demo of app:

![Demo](./public/images/FitnessTracker.gif)

# Total Duration

```
WorkoutSchema.virtual("totalDuration").get(function() {
    let total = 0;
    this.exercises.forEach(exercise => {
        total += exercise.duration
    });
    return total;
});
```


### Installation:

```
npm install
```

### Usage:

```
node server.js
```

## Author

### Nadine Bundschuh

- Github: nadineb1160
- [GitHub URL](https://github.com/nadineb1160)
- [LinkedIn](https://www.linkedin.com/in/nadine-bundschuh-731233b9)

### Attributes
Trilogy Eduction supplied the client-side code for this application.