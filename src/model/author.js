import mongoose, { Schema } from "mongoose";

const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = mongoose.model("Author", AuthorSchema);
