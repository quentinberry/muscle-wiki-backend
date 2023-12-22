import express from "express";
import {
  getAllExercises,
  getAllExerciseByPrimaryTargetMuscle,
  getAllExercisesBySecondaryMuscle,
  addNewExercise,
  deleteExercise,
  updateExercise,
} from "../controllers/wiki";

export default (router: express.Router) => {
  router.get("/wiki/muscle/exercises", getAllExercises);
  router.get(
    "/wiki/muscle/exercises/muscle/primary/:primaryMuscle",
    getAllExerciseByPrimaryTargetMuscle
  );
  router.get(
    "/wiki/muscle/exercises/muscle/secondary/:secondaryMuscle",
    getAllExercisesBySecondaryMuscle
  );
  router.post("/wiki/muscle/exercises", addNewExercise);
  router.delete("/wiki/muscle/exercises/:id", deleteExercise);
  router.patch("/wiki/muscle/exercises/:id", updateExercise);
};
