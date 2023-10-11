import express from "express"
import { WorkoutPlan } from "../controllers/WorkoutPlan.js"

const router = express.Router();

router.post("/workoutPlan", WorkoutPlan);

export default router;