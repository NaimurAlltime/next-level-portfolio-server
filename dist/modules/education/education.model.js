"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    institute: { type: String, required: true },
    certificate: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
}, { timestamps: true });
const Education = (0, mongoose_1.model)("education", schema);
exports.default = Education;
