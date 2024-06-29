import { Schema, model } from "mongoose";
import { ISkill } from "./skill.interface";

const locationSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    percentage: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// modal should define at last
export const Location = model<ILocation>("location", locationSchema);
