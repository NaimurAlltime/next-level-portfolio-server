import express, { Router } from "express";
import projectController from "./project.controller";
import validateRequest from "../../middleware/validateRequest.middleware";
import { experienceValidator } from "../experience/experience.validation";
import { createProjectSchema, updateProjectSchema } from "./project.validation";

const projectRoutes: Router = express.Router();

projectRoutes.post(
  "/create",
  validateRequest(createProjectSchema),
  projectController.create
);
projectRoutes.get("/", projectController.getAll);
projectRoutes.get("/:id", projectController.getOne);
projectRoutes.patch(
  "/update/:id",
  validateRequest(updateProjectSchema),
  projectController.update
);

export default projectRoutes;
