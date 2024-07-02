import { IEducation } from "./education.interface";
import Education from "./education.model";

const create = async (payload: IEducation): Promise<IEducation> => {
  const result = await Education.create(payload);
  return result;
};

const getAll = async () => {
  const result = await Education.find().sort({ endDate: -1 });

  return result;
};

const educationService = {
  create,
  getAll,
};

export default educationService;
