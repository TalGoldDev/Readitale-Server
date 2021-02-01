import express from "express";
import { accessControlAllowOrigin, fetchStories } from "./middleware/index.js";

const app = express();

app.use(accessControlAllowOrigin);
app.use(express.json());

app.get("/generate", fetchStories);

const helloWorld = function () {
  console.log("helloworld");
};

export { app as app };
