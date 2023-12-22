import mongoose from "mongoose";

const MuscleWikiExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  primaryTargetMuscle: { type: String, required: true },
  secondaryTargetMuscle: { type: String, required: false },
  secondaryTargetMuscleDetailed: { type: [String], required: false },
  equipmentNeeded: { type: [String], required: false },
  alternativeExerciseID: { type: [Number], required: false },
  description: { type: String, required: true },
  unilateral: { type: Boolean, required: true },
  thumbnailImage: { type: String, required: false },
});

export const MuscleWikiExerciseModel = mongoose.model(
  "exercise",
  MuscleWikiExerciseSchema
);

export const getExercises = () => MuscleWikiExerciseModel.find();
export const getExerciseByPrimaryTargetMuscle = (primaryMuscle: string) =>
  MuscleWikiExerciseModel.find({
    primaryTargetMuscle:
      primaryMuscle.toLowerCase().charAt(0).toUpperCase() +
      primaryMuscle.toLowerCase().slice(1),
  });
export const getExerciseBySecondaryTargetMuscle = (secondaryMuscle: string) =>
  MuscleWikiExerciseModel.find({
    secondaryTargetMuscle:
      secondaryMuscle.toLowerCase().charAt(0).toUpperCase() +
      secondaryMuscle.toLowerCase().slice(1),
  });
export const addExercise = (values: Record<string, any>) =>
  new MuscleWikiExerciseModel(values)
    .save()
    .then((exercise) => exercise.toObject());
export const deleteExerciseById = (id: string) =>
  MuscleWikiExerciseModel.findByIdAndDelete(id);
export const updateEntryById = (id: string, values: Record<string, any>) => {
  MuscleWikiExerciseModel.findByIdAndUpdate(id, values).then((exercise) => {
    if (exercise) {
      return exercise.toObject();
    } else {
      return null;
    }
  });
};
