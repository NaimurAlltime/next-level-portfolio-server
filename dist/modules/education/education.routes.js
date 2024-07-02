"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const education_controller_1 = __importDefault(require("./education.controller"));
const education_validation_1 = require("./education.validation");
const educationRoutes = express_1.default.Router();
educationRoutes.post("/", (0, auth_1.default)(), (0, validateRequest_1.default)(education_validation_1.educationValidator), education_controller_1.default.create);
educationRoutes.get("/", education_controller_1.default.getAll);
exports.default = educationRoutes;
