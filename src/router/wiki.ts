import express from "express";
import { getAllExercises } from "../controllers/wiki";

export default (router: express.Router) => {
  router.get("/wiki/muscle/exercises", getAllExercises);
};
