import express, { Router } from "express";

const projectRoutes: Router = express.Router();

projectRoutes.post("/", projectControllers.create);
projectRoutes.get("/", projectControllers.readAll);
projectRoutes.get("/:id", projectControllers.readOne);
projectRoutes.patch("/:id", projectControllers.update);

export default projectRoutes;
