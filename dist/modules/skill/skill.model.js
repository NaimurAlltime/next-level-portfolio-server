"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    percentage: {
        type: String,
    },
    icon: {
        type: String,
    },
}, {
    timestamps: true,
});
// modal should define at last
exports.Skill = (0, mongoose_1.model)("skill", skillSchema);
