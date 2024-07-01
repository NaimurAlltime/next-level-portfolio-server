"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    // Extract value within double quotes using regex
    const match = err.message.match(/"([^"]*)"/);
    // The extracted value will be in the first capturing group
    const extractedMessage = match && match[1];
    return {
        statusCode: 400,
        message: 'Invalid ID',
        errorMessage: `${extractedMessage} is not a valid ID!`,
        errorDetails: err,
    };
};
exports.default = handleCastError;
