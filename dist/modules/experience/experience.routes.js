"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const experience_controller_1 = __importDefault(require("./experience.controller"));
const experience_validation_1 = require("./experience.validation");
const express_1 = __importDefault(require("express"));
const experienceRoutes = express_1.default.Router();
experienceRoutes.post("/create", (0, validateRequest_1.default)(experience_validation_1.experienceValidator), experience_controller_1.default.create);
experienceRoutes.get("/", experience_controller_1.default.getAll);
exports.default = experienceRoutes;
