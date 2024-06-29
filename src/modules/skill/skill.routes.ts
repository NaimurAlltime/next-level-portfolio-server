import express, { Router } from "express";
import authorization from "../../middleware/authorization.middleware";
import queryFeatures from "../../middleware/queryFeatures.middleware";
import validateRequest from "../../middleware/validateRequest.middleware";
import locationController from "./skill.controller";
import locationValidation from "./skill.validation";

const locationRoutes: Router = express.Router();

locationRoutes.post(
  "/create",
  validateRequest(locationValidation.createReq),
  // authorization(),
  locationController.createLocation
);

locationRoutes.get(
  "/",
  queryFeatures("multiple"),
  locationController.getLocations
);

locationRoutes.get(
  "/:id",
  queryFeatures("single"),
  locationController.getSigleLocation
);

locationRoutes.patch(
  "/update/:id",
  validateRequest(locationValidation.updateReq),
  // authorization(),
  locationController.updateLocation
);

locationRoutes.delete(
  "/delete/:id",
  // authorization(),
  locationController.deleteLocation
);

export default locationRoutes;
