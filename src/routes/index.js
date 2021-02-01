import express from "express";
import { fetchStories } from "../middleware/index.js";

const router = express.Router();

router.get("/api/generate", fetchStories);

router.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

export { router as router };
