import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (
  req,
  res,
  next
) => {
 
    
   

    const result = await AcademicSemesterServices.createAcademicSemesterintoDB(req.body);


    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "academic  a creat a successfully ",
      data: result,
    });
});

export const academicSemesterControllers = {
    createAcademicSemester,
};
