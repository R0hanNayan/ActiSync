import User from "../models/User.js";
import Workout from "../models/Workout.js";

export const WorkoutPlan = async (req, res) => {
    try{
        const {
            userName,
            exercise
        } = req.body;

        const user = await User.findOne({userName : userName});
        
        if(user){
            const newWorkout = new Workout(
                {
                    userName,
                    exercise
                }
            )
            const savedWorkout = await newWorkout.save();
            res.status(201).json(savedWorkout);
        }else{
            console.log("User Does not exists!");
        }
    }catch(err){
        console.log(err);
    }
}