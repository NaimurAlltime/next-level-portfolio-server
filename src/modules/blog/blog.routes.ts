import { Router } from "express";
import blogControllers from "./blog.controller";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { blogValidator } from "./blog.validation";

const blogRoutes = Router();

blogRoutes.post(
  "/create",
  auth(),
  validateRequest(blogValidator),
  blogControllers.create
);
blogRoutes.get("/:id", blogControllers.readSingle);
blogRoutes.get("/", blogControllers.readAll);

export default blogRoutes;