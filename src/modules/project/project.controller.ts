import { Request, RequestHandler, Response } from "express";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import { IProject } from "./project.interface";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse.util";
import projectService from "./project.services";

const create: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await projectService.create(req.body);
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
    const result = await projectService.getAll();
    sendResponse<Partial<IProject>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Project read successfully",
      data: result,
    });
  }
);

const getOne: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await projectService.getOne(req.params.id);
    sendResponse<Partial<IProject> | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Project read successfully",
      data: result,
    });
  }
);

const update: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await projectService.update(req.params.id, req.body);
    sendResponse<Partial<IProject> | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Updated successfully",
      data: result,
    });
  }
);

const projectController = {
  create,
  getAll,
  getOne,
  update,
};
export default projectController;
