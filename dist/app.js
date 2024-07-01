"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
const sendResponse_util_1 = __importDefault(require("./utils/sendResponse.util"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
//global app middleware
app.use((0, helmet_1.default)());
// app.use(cors({ origin: "*" }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, hpp_1.default)());
//development middleware
if (config_1.default.isDevelopment) {
    app.use((0, morgan_1.default)("dev"));
}
//routes
app.use("/api/v1", routes_1.default);
// root
app.get("/", (req, res) => {
    (0, sendResponse_util_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Welcome to Next Level Portfolio Server",
    });
});
// Not found catch
app.all("*", (req, res) => {
    (0, sendResponse_util_1.default)(res, {
        statusCode: 200,
        success: false,
        message: "Adress not found",
    });
});
// error handling middleware
app.use(globalErrorHandler_1.default);
exports.default = app;
