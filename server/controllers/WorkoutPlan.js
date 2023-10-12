import User from "../models/User.js";
import Workout from "../models/Workout.js";

export const WorkoutPlan = async (req, res) => {
    try{
        const {
            userName,
            day, 
            exerciseType, 
            sets, 
            reps, 
            duration
        } = req.body;

        const user = await User.findOne({userName: userName});
        
        if(userName){
            const newWorkout = new Workout(
                {
                    userName,
                    day, 
                    exerciseType, 
                    sets, 
                    reps, 
                    duration
                }
            )
            const savedWorkout = await newWorkout.save();
            console.log(savedWorkout);
            res.send({savedWorkout: savedWorkout});
        }else{
            console.log("User Does not exists!");
        }
    }catch(err){
        console.log(err);
    }
}