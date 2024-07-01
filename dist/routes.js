"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const skill_routes_1 = __importDefault(require("./modules/skill/skill.routes"));
const experience_routes_1 = __importDefault(require("./modules/experience/experience.routes"));
const project_routes_1 = __importDefault(require("./modules/project/project.routes"));
const router = express_1.default.Router();
const routes = [
    {
        path: "/auth",
        route: auth_routes_1.default,
    },
    {
        path: "/skill",
        route: skill_routes_1.default,
    },
    {
        path: "/experience",
        route: experience_routes_1.default,
    },
    {
        path: "/project",
        route: project_routes_1.default,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
