import express from "express";
import { getExercises } from "../db/wiki";

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
