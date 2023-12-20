import mongoose from "mongoose";

const MuscleWikiExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  primaryTargetMuscle: { type: String, required: true },
  secondaryTargetMuscle: { type: String, required: false },
  secondaryTargetMuscleDetailed: { type: [String], required: false },
  equipmentNeeded: { type: [String], required: false },
  alternativeExerciseID: { type: [Number], required: false },
  Description: { type: String, required: true },
  unilateral: { type: Boolean, required: true },
  thumbnailImage: { type: String, required: false },
});

export const MuscleWikiExerciseModel = mongoose.model(
  "exercise",
  MuscleWikiExerciseSchema
);

export const getExercises = () => MuscleWikiExerciseModel.find();
export const getExerciseByPrimaryTargetMuscle = (primaryMuscle: string) =>
  MuscleWikiExerciseModel.find().where(primaryMuscle);

//more to come
