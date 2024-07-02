import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import AppError from "../../utils/customError.util";
import sendResponse from "../../utils/sendResponse.util";
import locationService from "./skill.service";
import { ISkill } from "./skill.interface";
import skillService from "./skill.service";

const createSkill: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await skillService.createSkill(req.body);
    sendResponse<ISkill>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill created successfully",
      data: result,
    });
  }
);

const getSkill: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await skillService.getSkill();
    sendResponse<Partial<ISkill>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
    });
  }
);

const updateSkill: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const updatePayload: Partial<ISkill> = req.body;

    const result: Partial<ISkill> | null = await skillService.updateSkill(
      id,
      updatePayload
    );

    if (!result) {
      throw new AppError("Requested Document Not Found", httpStatus.NOT_FOUND);
    }
    sendResponse<Partial<ISkill>>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Document Updated Successfully",
      data: result,
    });
  }
);
const deleteSkill: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;

    const result = await skillService.deleteSkill(id);

    if (!result) {
      throw new AppError("Requrested Document Not Found", httpStatus.NOT_FOUND);
    }
    sendResponse<Partial<ISkill>>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Document Deleted Successfully",
    });
  }
);

const skillController = {
  createSkill,
  getSkill,
  updateSkill,
  deleteSkill,
};
export default skillController;
