import { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";

const schema = new Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    cover: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = model<IBlog>("Blog", schema);
export default Blog;
