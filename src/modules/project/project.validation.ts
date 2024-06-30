import { z } from "zod";

// Define the tech schema
const techSchema = z.object({
  name: z.string().nonempty("Technology name is required"),
});

// Define the repository link schema
const repositoryLinkSchema = z.object({
  client_side_code: z.string().url().optional(),
  server_side_code: z.string().url().optional(),
});

// Define the main project create schema
const createProjectSchema = z.object({
  body: z.object({
    name: z.string().nonempty("Project name is required"),
    description: z.string().nonempty("Description is required"),
    category: z.enum(["Frontend", "Backend", "Full-stack"]).optional(),
    featured: z.boolean().optional().default(false),
    features: z.array(z.string()).optional(),
    technologies: z.array(techSchema).optional(),
    cover: z.string().nonempty("Cover is required"),
    repositoryLink: repositoryLinkSchema.optional(),
    liveSiteLink: z.string().url().nonempty("Live site link is required"),
  }),
});

// Define the main project update schema
const updateProjectSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(["Frontend", "Backend", "Full-stack"]).optional(),
    featured: z.boolean().optional(),
    features: z.array(z.string()).optional(),
    technologies: z.array(techSchema).optional(),
    cover: z.string().optional(),
    repositoryLink: repositoryLinkSchema.optional(),
    liveSiteLink: z.string().url().optional(),
  }),
});

// Export the schemas
export { createProjectSchema, updateProjectSchema };
