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

export const getUserWorkout = async(req, res) => {
    try{
        // console.log(req.params);
        const {userName} = req.params;
        const workouts = await Workout.find({userName : userName});
        // console.log(post);
        if(workouts){
            res.send(workouts);
        }else{
            res.send({noWorkouts: true});  //Sending Boolean value to frontend if no posts found 
        }
    }catch(err){
        console.log(err);
    }
}