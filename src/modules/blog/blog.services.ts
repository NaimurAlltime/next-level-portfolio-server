import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const create = async (payload: IBlog): Promise<IBlog> => {
  const result = await Blog.create(payload);
  return result;
};

const getAll = async () => {
  const result = await Blog.find().sort({ createdAt: -1 });

  return result;
};

const getOne = async (id: string) => {
  const result = await Blog.findById(id);

  return result;
};

const update = async (id: string, payload: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload);

  return result;
};

const blogService = {
  create,
  getAll,
  getOne,
  update,
};

export default blogService;
