import express, { Router } from "express";
import projectController from "./project.controller";

import { createProjectSchema, updateProjectSchema } from "./project.validation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";

const projectRoutes: Router = express.Router();

projectRoutes.post(
  "/create",
  auth(),
  validateRequest(createProjectSchema),
  projectController.create
);
projectRoutes.get("/", projectController.getAll);
projectRoutes.get("/:id", projectController.getOne);
projectRoutes.patch(
  "/update/:id",
  auth(),
  validateRequest(updateProjectSchema),
  projectController.update
);

export default projectRoutes;
