import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "Blog",
  }
);

export const PostModel = mongoose.model("Blog", PostSchema);
