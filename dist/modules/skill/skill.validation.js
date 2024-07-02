"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createReq = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "name is must required",
        invalid_type_error: "name must be a string",
    }),
    percentage: zod_1.z.number({
        invalid_type_error: "Percentage must be a string",
    }),
    icon: zod_1.z.string({
        invalid_type_error: "Icon must be a string",
    }),
});
const updateReq = zod_1.z.object({
    name: zod_1.z
        .string({
        invalid_type_error: "name must be a string",
    })
        .optional(),
    percentage: zod_1.z
        .number({
        invalid_type_error: "percentage must be a string",
    })
        .optional(),
    icon: zod_1.z
        .string({
        invalid_type_error: "icon must be a string",
    })
        .optional(),
});
const skillValidation = {
    createReq,
    updateReq,
};
exports.default = skillValidation;
