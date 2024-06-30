import { IExperience } from "./experience.interface";
import Experience from "./experience.model";

const create = async (payload: IExperience): Promise<IExperience> => {
  const result = await Experience.create(payload);
  return result;
};

const getAll = async () => {
  const result = await Experience.find().sort({ endDate: -1 });

  return result;
};

const experienceService = {
  create,
  getAll,
};

export default experienceService;
