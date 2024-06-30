import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";

interface ITechnology {
  _id: string;
  name: string;
  image: string;
}

const techSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { _id: false }
);

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ["Frontend", "Backend", "Full-stack"] },
    featured: { type: Boolean, default: false },
    features: [{ type: String }],
    technologies: [{ type: techSchema }],
    cover: { type: String, required: true },
    repositoryLink: {
      source_code: { type: String },
      client_side_code: { type: String },
      server_side_code: { type: String },
    },
    liveSiteLink: { type: String, required: true },
  },
  { timestamps: true }
);

const Project = model<IProject>("Project", schema);
export default Project;
