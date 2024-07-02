"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationValidator = void 0;
const zod_1 = require("zod");
exports.educationValidator = zod_1.z.object({
    institute: zod_1.z.string(),
    certificate: zod_1.z.string(),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
});
