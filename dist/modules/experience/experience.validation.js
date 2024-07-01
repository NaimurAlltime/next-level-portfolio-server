"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceValidator = void 0;
const zod_1 = require("zod");
exports.experienceValidator = zod_1.z.object({
    title: zod_1.z.string(),
    organization: zod_1.z.string(),
    link: zod_1.z.string().optional(),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
    responsibilities: zod_1.z.array(zod_1.z.string()),
});
