import { Schema, model } from "mongoose";
import { ISkill } from "./skill.interface";

const skillSchema = new Schema<ISkill>(
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
  }
);

// modal should define at last
export const Skill = model<ISkill>("skill", skillSchema);
