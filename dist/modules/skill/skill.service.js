"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongooseAggrigationQueryFeatures_helper_1 = __importDefault(require("../../helpers/mongooseAggrigationQueryFeatures.helper"));
const skill_model_1 = require("./skill.model");
const createSkill = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.create(payload);
    return result;
});
const getSkill = (queryFeatures) => __awaiter(void 0, void 0, void 0, function* () {
    const queryFeatureStages = (0, mongooseAggrigationQueryFeatures_helper_1.default)(queryFeatures, { searchFields: ["name"] });
    const pipeline = [...queryFeatureStages];
    const [result] = yield skill_model_1.Skill.aggregate(pipeline);
    return result;
});
const updateSkill = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.Skill.findByIdAndUpdate(id, payload, { new: true }).lean();
    return result;
});
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidObjectId = mongoose_1.Types.ObjectId.isValid(id);
    if (!isValidObjectId) {
        throw new Error("Skill not found!");
    }
    else {
        const result = yield skill_model_1.Skill.findByIdAndDelete(id);
        return result;
    }
});
const skillService = {
    createSkill,
    getSkill,
    updateSkill,
    deleteSkill,
};
exports.default = skillService;
