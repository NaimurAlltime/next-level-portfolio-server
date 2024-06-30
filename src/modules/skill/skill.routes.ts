import express, { Router } from "express";
import authorization from "../../middleware/authorization.middleware";
import queryFeatures from "../../middleware/queryFeatures.middleware";
import validateRequest from "../../middleware/validateRequest.middleware";
import skillController from "./skill.controller";
import skillValidation from "./skill.validation";

const skillRoutes: Router = express.Router();

skillRoutes.post(
  "/create",
  validateRequest(skillValidation.createReq),
  // authorization(),
  skillController.createSkill
);

skillRoutes.get("/", queryFeatures("multiple"), skillController.getSkill);

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
