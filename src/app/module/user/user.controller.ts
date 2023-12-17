import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (
  req,
  res,
  next
) => {
 
    // Joi validator schema using
    const { password, student: studentData } = req.body;
    //  const {error} = studentValidationSchema.validate(studentData)

    // zod validation
    //   const zodParsedData = studentValidationSchema.parse(studentData)

    const result = await UserService.createStudentIntoDB(password, studentData);


    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student a creat a successfully ",
      data: result,
    });
});

export const UserControllers = {
  createStudent,
};
