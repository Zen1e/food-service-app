import express from "express";
import { getCats } from "../controllers/categories/get.js";
import { createCat } from "../controllers/categories/create.js";
import { deleteCat } from "../controllers/categories/delete.js";
import { verifyJWT } from "../utils/verifyJWT.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

export const catRouter = express.Router();

catRouter.get("/", getCats);
catRouter.post("/",verifyJWT,verifyAdmin,createCat);
catRouter.delete("/",deleteCat);