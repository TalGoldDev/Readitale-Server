import express from "express";
import { accessControlAllowOrigin, fetchStories } from "./middleware/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(accessControlAllowOrigin);
app.use(express.json());

app.get("/generate", fetchStories);

const helloWorld = function () {
  console.log("helloworld");
};

export { app as app };
