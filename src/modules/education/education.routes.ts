import express, { Router } from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import educationController from "./education.controller";
import { educationValidator } from "./education.validation";

const educationRoutes: Router = express.Router();

educationRoutes.post(
  "/",
  auth(),
  validateRequest(educationValidator),
  educationController.create
);
educationRoutes.get("/", educationController.getAll);

export default educationRoutes;
