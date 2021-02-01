import mongoose, { Schema } from "mongoose";

const PostSchema = mongoose.Schema({
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
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = mongoose.model("Post", PostSchema);
