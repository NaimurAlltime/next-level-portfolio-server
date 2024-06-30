import { Request, RequestHandler, Response } from "express";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import { IProject } from "./project.interface";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse.util";

const create: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await experienceService.create(req.body);
    sendResponse<IProject>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project created successfully",
      data: result,
    });
  }
);

const getAll: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await experienceService.getAll();
    sendResponse<Partial<IProject>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Project read successfully",
      data: result,
    });
  }
);

const projectController = {
  create,
  getAll,
};
export default projectController;
