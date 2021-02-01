import express from "express";
import { accessControlAllowOrigin, fetchStories } from "./middleware/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./routes/index.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(accessControlAllowOrigin);
app.use(express.json());

app.use(router);

export { app as app };
