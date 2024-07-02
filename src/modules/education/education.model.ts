import { Schema, model } from "mongoose";
import { IEducation } from "./education.interface";

const schema = new Schema(
  {
    institute: { type: String, required: true },
    certificate: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
  },
  { timestamps: true }
);

const Education = model<IEducation>("education", schema);
export default Education;
