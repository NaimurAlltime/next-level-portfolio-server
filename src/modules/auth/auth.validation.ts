import { z } from "zod";

const loginReq = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z.string({
    required_error: "Password is required",
  }),
});

const authValidation = {
  loginReq,
};

export default authValidation;
