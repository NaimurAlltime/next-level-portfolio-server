import { z } from "zod";

export const experienceValidator = z.object({
  body: z.object({
    title: z.string(),
    organization: z.string(),
    link: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    responsibilities: z.array(z.string()),
  }),
});
