"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AppError_1 = __importDefault(require("../error/AppError"));
const handleCastError_1 = __importDefault(require("../error/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../error/handleDuplicateError"));
const handleValidationError_1 = __importDefault(require("../error/handleValidationError"));
const handleZodError_1 = __importDefault(require("../error/handleZodError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'Someting went wrong!';
    let errorMessage = 'Someting went wrong!';
    let errorDetails;
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessage = simplifiedError.errorMessage;
        errorDetails = simplifiedError.errorDetails;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessage = simplifiedError.errorMessage;
        errorDetails = simplifiedError.errorDetails;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessage = simplifiedError.errorMessage;
        errorDetails = simplifiedError.errorDetails;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedError = (0, handleCastError_1.default)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessage = simplifiedError.errorMessage;
        errorDetails = simplifiedError.errorDetails;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        errorMessage = err === null || err === void 0 ? void 0 : err.message;
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorMessage,
        errDetails: err,
        stack: process.env.NODE_ENV ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorHandler;
