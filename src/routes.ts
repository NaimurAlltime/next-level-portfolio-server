import express, { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import skillRoutes from "./modules/skill/skill.routes";
import experienceRoutes from "./modules/experience/experience.routes";
import projectRoutes from "./modules/project/project.routes";
import educationRoutes from "./modules/education/education.routes";
import blogRoutes from "./modules/blog/blog.routes";

const router: Router = express.Router();

const routes: { path: string; route: Router }[] = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/skill",
    route: skillRoutes,
  },
  {
    path: "/experience",
    route: experienceRoutes,
  },
  {
    path: "/project",
    route: projectRoutes,
  },
  {
    path: "/education",
    route: educationRoutes,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
