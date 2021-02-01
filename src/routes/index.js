import express from "express";
import {
  authentication,
  fetchStories,
  getStories,
} from "../middleware/index.js";

const router = express.Router();

router.get("/api/fetchStories", authentication, fetchStories);

router.get("/api/get/stories", getStories);

router.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

export { router as router };
