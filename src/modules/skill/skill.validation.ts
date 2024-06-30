import { z } from "zod";

const createReq = z.object({
  body: z
    .object({
      name: z.string({
        required_error: "name is must required",
        invalid_type_error: "name must be a string",
      }),
      percentage: z.string({
        invalid_type_error: "Percentage must be a string",
      }),
      icon: z.string({
        invalid_type_error: "Icon must be a string",
      }),
    })
    .strict(),
});
const updateReq = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "name must be a string",
      })
      .optional(),
    percentage: z
      .string({
        invalid_type_error: "percentage must be a string",
      })
      .optional(),
    icon: z
      .string({
        invalid_type_error: "icon must be a string",
      })
      .optional(),
  }),
});

const skillValidation = {
  createReq,
  updateReq,
};

export default skillValidation;
