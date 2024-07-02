import { z } from "zod";

export const educationValidator = z.object({
  institute: z.string(),
  certificate: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});
