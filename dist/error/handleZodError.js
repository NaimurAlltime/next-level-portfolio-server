"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zodErrorHandler = (err) => {
    var _a;
    const errorMessage = (_a = err === null || err === void 0 ? void 0 : err.issues) === null || _a === void 0 ? void 0 : _a.map((issue) => { var _a; return `${issue === null || issue === void 0 ? void 0 : issue.path[((_a = issue === null || issue === void 0 ? void 0 : issue.path) === null || _a === void 0 ? void 0 : _a.length) - 1]} is required`; });
    const formattedErrorMessage = (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.join('. ')) || '';
    return {
        statusCode: 400,
        message: 'Validation error',
        errorMessage: formattedErrorMessage,
        errorDetails: err.issues,
    };
};
exports.default = zodErrorHandler;
