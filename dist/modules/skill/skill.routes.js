"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skill_controller_1 = __importDefault(require("./skill.controller"));
const skill_validation_1 = __importDefault(require("./skill.validation"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const skillRoutes = express_1.default.Router();
skillRoutes.post("/create", (0, validateRequest_1.default)(skill_validation_1.default.createReq), 
// authorization(),
skill_controller_1.default.createSkill);
skillRoutes.get("/", skill_controller_1.default.getSkill);
skillRoutes.patch("/update/:id", (0, validateRequest_1.default)(skill_validation_1.default.updateReq), 
// authorization(),
skill_controller_1.default.updateSkill);
skillRoutes.delete("/delete/:id", 
// authorization(),
skill_controller_1.default.deleteSkill);
exports.default = skillRoutes;
