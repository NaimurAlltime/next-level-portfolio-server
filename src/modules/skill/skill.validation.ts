import { z } from "zod";

const createReq = z.object({
  name: z.string({
    required_error: "name is must required",
    invalid_type_error: "name must be a string",
  }),
  percentage: z.number({
    invalid_type_error: "Percentage must be a string",
  }),
  icon: z.string({
    invalid_type_error: "Icon must be a string",
  }),
});

const updateReq = z.object({
  name: z
    .string({
      invalid_type_error: "name must be a string",
    })
    .optional(),
  percentage: z
    .number({
      invalid_type_error: "percentage must be a string",
    })
    .optional(),
  icon: z
    .string({
      invalid_type_error: "icon must be a string",
    })
    .optional(),
});

const skillValidation = {
  createReq,
  updateReq,
};

export default skillValidation;
