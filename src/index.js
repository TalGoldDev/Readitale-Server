import express from "express";
import { accessControlAllowOrigin } from "./middleware/index.js";
const app = express();

app.use(accessControlAllowOrigin);
app.use(express.json());

app.get("/generate", (req, res) => {
  helloWorld();
  res.send("hello world");
});

const helloWorld = function () {
  console.log("helloworld");
};

export { app as app };
