import { Schema, model } from "mongoose";

const postSchema = Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFidle: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { collection: "posts", timestamps: true }
);


export default  model('Post',postSchema )

