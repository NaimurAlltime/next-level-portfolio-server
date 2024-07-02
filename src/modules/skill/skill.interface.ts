import { Model, ObjectId } from "mongoose";

export interface ISkill {
  name: string;
  percentage: string;
  icon: string;
}

export type SkillModel = Model<ISkill, object>;
