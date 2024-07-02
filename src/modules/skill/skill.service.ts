import { PipelineStage, Types } from "mongoose";
import makeQueryFeatureStages from "../../helpers/mongooseAggrigationQueryFeatures.helper";
import {
  IQueryFeatures,
  IQueryResult,
} from "../../interfaces/queryFeatures.interface";

import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

const createSkill = async (payload: ISkill): Promise<ISkill> => {
  const result = await Skill.create(payload);
  return result;
};

const getSkill = async () => {
  const result = await Skill.find();
  return result;
};

const updateSkill = async (
  id: string,
  payload: Partial<ISkill>
): Promise<Partial<ISkill> | null> => {
  const result: Partial<ISkill> | null = await Skill.findByIdAndUpdate(
    id,
    payload,
    { new: true }
  ).lean();

  return result;
};

const deleteSkill = async (id: string) => {
  const isValidObjectId = Types.ObjectId.isValid(id);

  if (!isValidObjectId) {
    throw new Error("Skill not found!");
  } else {
    const result = await Skill.findByIdAndDelete(id);
    return result;
  }
};

const skillService = {
  createSkill,
  getSkill,
  updateSkill,
  deleteSkill,
};

export default skillService;
