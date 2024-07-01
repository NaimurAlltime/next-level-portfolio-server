"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: { type: String },
    organization: { type: String, required: true },
    link: { type: String },
    responsibilities: { type: [String], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, { timestamps: true });
const Experience = (0, mongoose_1.model)("Experience", schema);
exports.default = Experience;
