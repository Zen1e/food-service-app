import express from "express";
import { getCats } from "../controllers/categories/get.js";
import { createCat } from "../controllers/categories/create.js";

export const catRouter = express.Router();

catRouter.get("/", getCats);
catRouter.post("/", createCat);