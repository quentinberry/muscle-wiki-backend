import express from "express";
import wiki from "./wiki";

const router = express.Router();

export default (): express.Router => {
  wiki(router);
  return router;
};
