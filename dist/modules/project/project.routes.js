"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = __importDefault(require("./project.controller"));
const project_validation_1 = require("./project.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const projectRoutes = express_1.default.Router();
projectRoutes.post("/create", (0, validateRequest_1.default)(project_validation_1.createProjectSchema), project_controller_1.default.create);
projectRoutes.get("/", project_controller_1.default.getAll);
projectRoutes.get("/:id", project_controller_1.default.getOne);
projectRoutes.patch("/update/:id", (0, validateRequest_1.default)(project_validation_1.updateProjectSchema), project_controller_1.default.update);
exports.default = projectRoutes;
