import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 6,
        max: 50,
        unique: true
    },
    exercise: {
        day : {
            type: Date,
            required: true
        },
        exerciseType : {
            type: String,
            required: true
        },
        sets : {
            type: Number,
            required: true,
            min: 0
        },
        reps: {
            type: Number,
            required: true,
            min: 0
        }
    }
    }, {timestamps: true}
);

const Workout = mongoose.model("Workout", WorkoutSchema);

export default Workout;