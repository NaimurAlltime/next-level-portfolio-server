import { Schema, model } from "mongoose";
import { IExperience } from "./experience.interface";

const schema = new Schema(
  {
    title: { type: String },
    organization: { type: String, required: true },
    link: { type: String },
    responsibilities: { type: [String], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Experience = model<IExperience>("Experience", schema);
export default Experience;
