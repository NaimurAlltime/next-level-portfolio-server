import express, { Router } from "express";
import skillController from "./skill.controller";
import skillValidation from "./skill.validation";
import validateRequest from "../../middleware/validateRequest";

const skillRoutes: Router = express.Router();

skillRoutes.post(
  "/create",
  validateRequest(skillValidation.createReq),
  // authorization(),
  skillController.createSkill
);

skillRoutes.get("/", skillController.getSkill);

skillRoutes.patch(
  "/update/:id",
  validateRequest(skillValidation.updateReq),
  // authorization(),
  skillController.updateSkill
);

skillRoutes.delete(
  "/delete/:id",
  // authorization(),
  skillController.deleteSkill
);

export default skillRoutes;
