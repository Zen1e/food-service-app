import express from "express";
import { createUser } from "../controllers/users/create.js";
import { getUsers } from "../controllers/users/get.js";
import { checkEmail } from "../controllers/users/email_check.js";
import { loginCheck } from "../controllers/users/login_check.js";
import { editUser } from "../controllers/users/put.js";
import { findUser } from "../controllers/users/findByID.js";
import { verifyJWT } from "../utils/verifyJWT.js";

export const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.post("/check", checkEmail);
userRouter.post("/login", loginCheck);
userRouter.put("/",verifyJWT, editUser);
userRouter.post("/find",verifyJWT,findUser);