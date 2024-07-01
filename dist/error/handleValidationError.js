"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (err) => {
    const errorMessage = Object.values(err.errors).map((val) => `${val === null || val === void 0 ? void 0 : val.message} is required`);
    const formattedErrorMessage = (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.join('. ')) || '';
    return {
        statusCode: 400,
        message: 'Validation error',
        errorMessage: formattedErrorMessage,
        errorDetails: err,
    };
};
exports.default = handleValidationError;
