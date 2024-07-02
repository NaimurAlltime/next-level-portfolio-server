import { Request, RequestHandler, Response } from "express";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse.util";
import blogService from "./blog.services";
import { IBlog } from "./blog.interface";

const create: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await blogService.create(req.body);
    sendResponse<IBlog>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project created successfully",
      data: result,
    });
  }
);

const getAll: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await blogService.getAll();
    sendResponse<Partial<IBlog>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Project read successfully",
      data: result,
    });
  }
);

const getOne: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await blogService.getOne(req.params.id);
    sendResponse<Partial<IBlog> | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Project read successfully",
      data: result,
    });
  }
);

const update: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await blogService.update(req.params.id, req.body);
    sendResponse<Partial<IBlog> | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Updated successfully",
      data: result,
    });
  }
);

const blogController = {
  create,
  getAll,
  getOne,
  update,
};
export default blogController;
