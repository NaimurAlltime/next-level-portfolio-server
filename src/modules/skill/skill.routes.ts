import express, { Router } from "express";
import skillController from "./skill.controller";
import skillValidation from "./skill.validation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";

const skillRoutes: Router = express.Router();

skillRoutes.post(
  "/create",
  validateRequest(skillValidation.createReq),
  auth(),
  skillController.createSkill
);

skillRoutes.get("/", skillController.getSkill);

skillRoutes.patch(
  "/update/:id",
  validateRequest(skillValidation.updateReq),
  auth(),
  skillController.updateSkill
);

skillRoutes.delete(
  "/delete/:id",
  // authorization(),
  skillController.deleteSkill
);

export default skillRoutes;
