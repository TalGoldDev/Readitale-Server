import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

export { Post as Post };
