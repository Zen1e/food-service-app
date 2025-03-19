import express from "express";
import { getFoods } from "../controllers/foods/get.js";
import { createFood } from "../controllers/foods/create.js";

export const foodRouter = express.Router();

foodRouter.get("/:category",getFoods);
foodRouter.post("/",createFood);