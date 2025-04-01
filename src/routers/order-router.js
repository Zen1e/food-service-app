import express from "express";
import { createOrder } from "../controllers/orders/create.js";
import { getOrders } from "../controllers/orders/userOrder.js";
import { getAllOrders } from "../controllers/orders/getAll.js";
import { updateStatus } from "../controllers/orders/updateStatus.js";
import { verifyJWT } from "../utils/verifyJWT.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

export const orderRouter = express.Router();

orderRouter.post("/",verifyJWT, createOrder);
orderRouter.post("/history",verifyJWT,getOrders);
orderRouter.get("/",verifyJWT,verifyAdmin,getAllOrders);
orderRouter.put("/status",verifyJWT,verifyAdmin,updateStatus);