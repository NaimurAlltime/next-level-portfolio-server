import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsyncErrors from "../../utils/catchAsyncError.util";
import AppError from "../../utils/customError.util";
import sendResponse from "../../utils/sendResponse.util";
import locationService from "./skill.service";
import { ISkill } from "./skill.interface";

const createSkill: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const result = await locationService.create(req.body);
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
    const getResult = await locationService.getLocations(req.queryFeatures);
    sendResponse<Partial<ISkill>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: getResult.data,
      meta: {
        page: req.queryFeatures.page,
        limit: req.queryFeatures.limit,
        total: getResult.total || 0,
      },
    });
  }
);

const updateSkill: RequestHandler = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const updatePayload: Partial<ISkill> = req.body;

    const result: Partial<ISkill> | null = await locationService.updateLocation(
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

    const result = await locationService.deleteLocation(id);

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

const locationController = {
  createSkill,
  getSkill,
  updateSkill,
  deleteSkill,
};
export default locationController;
