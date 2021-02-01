import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
