import validateRequest from "../../middleware/validateRequest";
import experienceController from "./experience.controller";
import { experienceValidator } from "./experience.validation";
import express, { Router } from "express";

const experienceRoutes: Router = express.Router();

experienceRoutes.post(
  "/create",
  validateRequest(experienceValidator),
  experienceController.create
);
experienceRoutes.get("/", experienceController.getAll);

export default experienceRoutes;
