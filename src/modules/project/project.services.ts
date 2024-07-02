import { IProject } from "./project.interface";
import Project from "./project.model";

const create = async (payload: IProject): Promise<IProject> => {
  const result = await Project.create(payload);
  return result;
};

const getAll = async () => {
  const result = await Project.find().sort({ createdAt: -1 });

  return result;
};

const getOne = async (id: string) => {
  const result = await Project.findById(id);

  return result;
};

const update = async (id: string, payload: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload);

  return result;
};

const projectService = {
  create,
  getAll,
  getOne,
  update,
};

export default projectService;
