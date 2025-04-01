import express from "express";
import { getFoods } from "../controllers/foods/get.js";
import { createFood } from "../controllers/foods/create.js";
import { deleteFood } from "../controllers/foods/delete.js";
import { editFood } from "../controllers/foods/edit.js";
import { verifyJWT } from "../utils/verifyJWT.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

export const foodRouter = express.Router();

foodRouter.get("/:category",verifyJWT,getFoods);
foodRouter.post("/",verifyJWT,verifyAdmin,createFood);
foodRouter.delete("/",deleteFood);
foodRouter.put("/",verifyJWT,verifyAdmin,editFood);