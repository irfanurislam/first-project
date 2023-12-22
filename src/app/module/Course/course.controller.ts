import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { CourseService } from "./course.service";


const createCourse = catchAsync(async (req, res, next) => {
  const result = await CourseService.createCourseIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "course a creat a successfully ",
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseService.getALlCoursesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " a retireve  a successfully ",
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.getSingleCourseFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "a retireve  successfully ",
    data: result,
  });
});

// const updateAcademicFaculty = catchAsync(async (req, res, next) => {
//   const { facultyId } = req.params;
//   const result = await AcademicFacultyServices.updateAcademicFacultyintoDB(
//     facultyId,
//     req.body
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "academic faculty  a creat a successfully ",
//     data: result,
//   });
// });

const deleteCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CourseService.deleteCourseFromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "a deleted  successfully ",
      data: result,
    });
  });

export const academicFacultyControllers = {
    createCourse,
  getAllCourses,

  getSingleCourse,
  deleteCourse
};
