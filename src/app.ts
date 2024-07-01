import cors from "cors";
import express, { Application } from "express";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import config from "./config";
import routes from "./routes";
import sendResponse from "./utils/sendResponse.util";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./middleware/globalErrorHandler";
const app: Application = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//global app middleware
app.use(helmet());
// app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ExpressMongoSanitize());
app.use(hpp());

//development middleware
if (config.isDevelopment) {
  app.use(morgan("dev"));
}
//routes
app.use("/api/v1", routes);

// root
app.get("/", (req, res) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Welcome to Next Level Portfolio Server",
  });
});

// Not found catch
app.all("*", (req, res) => {
  sendResponse(res, {
    statusCode: 200,
    success: false,
    message: "Adress not found",
  });
});

// error handling middleware
app.use(globalErrorHandler);

export default app;
