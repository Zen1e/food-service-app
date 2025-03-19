import express from "express";
import { createOrder } from "../controllers/orders/create.js";
import { getOrders } from "../controllers/orders/userOrder.js";
import { getAllOrders } from "../controllers/orders/getAll.js";
import { updateStatus } from "../controllers/orders/updateStatus.js";

export const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.post("/history",getOrders);
orderRouter.get("/",getAllOrders);
orderRouter.put("/status",updateStatus);