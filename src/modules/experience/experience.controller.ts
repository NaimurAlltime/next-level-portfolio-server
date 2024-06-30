import { Request, RequestHandler, Response } from "express";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import sendResponse from "../../utils/sendResponse.util";
import { IExperience } from "./experience.interface";
import httpStatus from "http-status";
import experienceService from "./experience.services";

const create: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await experienceService.create(req.body);
    sendResponse<IExperience>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience created successfully",
      data: result,
    });
  }
);

const getAll: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await experienceService.getAll();
    sendResponse<Partial<IExperience>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience read successfully",
      data: result,
    });
  }
);

const experienceController = {
  create,
  getAll,
};
export default experienceController;
