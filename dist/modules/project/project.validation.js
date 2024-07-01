"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectSchema = exports.createProjectSchema = void 0;
const zod_1 = require("zod");
// Define the tech schema
const techSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Technology name is required"),
});
// Define the repository link schema
const repositoryLinkSchema = zod_1.z.object({
    client_side_code: zod_1.z.string().url().optional(),
    server_side_code: zod_1.z.string().url().optional(),
});
// Define the main project create schema
const createProjectSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Project name is required"),
    description: zod_1.z.string().nonempty("Description is required"),
    category: zod_1.z.enum(["Frontend", "Backend", "Full-stack"]).optional(),
    featured: zod_1.z.boolean().optional().default(false),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    technologies: zod_1.z.array(techSchema).optional(),
    cover: zod_1.z.string().nonempty("Cover is required"),
    repositoryLink: repositoryLinkSchema.optional(),
    liveSiteLink: zod_1.z.string().url().nonempty("Live site link is required"),
});
exports.createProjectSchema = createProjectSchema;
// Define the main project update schema
const updateProjectSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    category: zod_1.z.enum(["Frontend", "Backend", "Full-stack"]).optional(),
    featured: zod_1.z.boolean().optional(),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    technologies: zod_1.z.array(techSchema).optional(),
    cover: zod_1.z.string().optional(),
    repositoryLink: repositoryLinkSchema.optional(),
    liveSiteLink: zod_1.z.string().url().optional(),
});
exports.updateProjectSchema = updateProjectSchema;
