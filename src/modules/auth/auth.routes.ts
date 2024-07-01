import express from "express";
import authController from "./auth.controller";
import authValidation from "./auth.validation";
import validateRequest from "../../middleware/validateRequest";
const authRoutes = express.Router();

authRoutes.post(
  "/login",
  validateRequest(authValidation.loginReq),
  authController.login
);

export default authRoutes;
