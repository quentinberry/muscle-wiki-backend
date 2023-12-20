import express from "express";
import {
  getExercises,
  getExerciseByPrimaryTargetMuscle,
  getExerciseBySecondaryTargetMuscle,
  addExercise,
} from "../db/wiki";
import { ObjectId } from "mongodb";

interface ExerciseData {
  name: string;
  primaryTargetMuscle: string;
  secondaryTargetMuscle?: string;
  secondaryTargetMuscleDetailed?: string[];
  equipmentNeeded?: string[];
  alternativeExerciseID?: string[] | number[];
  description: string;
  unilateral: boolean;
  thumbnailImage?: string;
}

export const getAllExercises = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const response = await getExercises();
    console.log("Getting all exercises..");
    return res.status(200).json(response).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAllExerciseByPrimaryTargetMuscle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { primaryMuscle } = req.params;
    if (!primaryMuscle) {
      console.log("No primary muscle provided");
      return res.sendStatus(400);
    }
    if (primaryMuscle) {
      const response = await getExerciseByPrimaryTargetMuscle(primaryMuscle);
      console.log("Getting all exercises by target muscle..");
      return res.status(200).json(response).end();
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAllExercisesBySecondaryMuscle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { secondaryMuscle } = req.params;
    if (!secondaryMuscle) {
      console.log("No secondary muscle provided");
      return res.sendStatus(400);
    }
    if (secondaryMuscle) {
      const response = await getExerciseBySecondaryTargetMuscle(
        secondaryMuscle
      );
      console.log("Getting all exercises by secondary target muscle..");
      return res.status(200).json(response).end();
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addNewExercise = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      name,
      primaryTargetMuscle,
      secondaryTargetMuscle,
      secondaryTargetMuscleDetailed,
      equipmentNeeded,
      alternativeExerciseID,
      description,
      unilateral,
      thumbnailImage,
    }: ExerciseData = req.body;
    const newExercise = {
      name,
      primaryTargetMuscle,
      secondaryTargetMuscle: secondaryTargetMuscle || "",
      secondaryTargetMuscleDetailed: secondaryTargetMuscleDetailed || [],
      equipmentNeeded: equipmentNeeded || [],
      alternativeExerciseID: alternativeExerciseID || [],
      description,
      unilateral,
      thumbnailImage: thumbnailImage || "",
    };
    if (!name || !primaryTargetMuscle || !description || !unilateral) {
      console.log("Missing required fields");
      return res.sendStatus(400);
    }
    const exercise = await addExercise(newExercise);
    return res.status(200).json(exercise).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
