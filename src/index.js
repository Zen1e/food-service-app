import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routers/user-router.js";
import { catRouter } from "./routers/cat-router.js";
import dotenv from "dotenv";
import { foodRouter } from "./routers/food-router.js";
import { orderRouter } from "./routers/order-router.js";

dotenv.config();

const uri = process.env.DATABASE_URI
// mongoose.connect(uri);

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (err) {
    console.log("Error occured", err);
  }
};

connectDb();

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);
app.use("/cat", catRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter)

app.listen(port, () => {
  console.log("Example app port: " + port);
});
