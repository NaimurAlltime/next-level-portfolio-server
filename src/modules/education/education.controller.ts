import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse.util";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import { IEducation } from "./education.interface";
import httpStatus from "http-status";

const create: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await experienceService.create(req.body);
    sendResponse<IEducation>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Education created successfully",
      data: result,
    });
  }
);

const getAll: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await experienceService.getAll();
    sendResponse<Partial<IEducation>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Education read successfully",
      data: result,
    });
  }
);

const educationController = {
  create,
  getAll,
};
export default educationController;
