import validateRequest from "../../middleware/validateRequest.middleware";
import { experienceValidator } from "./experience.validation";
import express, { Router } from "express";

const experienceRoutes: Router = express.Router();

experienceRoutes.post(
  "/create",
  validateRequest(experienceValidator),
  experienceControllers.create
);
experienceRoutes.get("/", experienceControllers.readAll);

export default experienceRoutes;
