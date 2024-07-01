"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const techSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, { _id: false });
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ["Frontend", "Backend", "Full-stack"] },
    featured: { type: Boolean, default: false },
    features: [{ type: String }],
    technologies: [{ type: techSchema }],
    cover: { type: String, required: true },
    repositoryLink: {
        client_side_code: { type: String },
        server_side_code: { type: String },
    },
    liveSiteLink: { type: String, required: true },
}, { timestamps: true });
const Project = (0, mongoose_1.model)("Project", schema);
exports.default = Project;
