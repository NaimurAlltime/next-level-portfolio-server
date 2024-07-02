import { z } from "zod";

export const blogValidator = z.object({
  title: z.string(),
  cover: z.string(),
  text: z.string(),
});
