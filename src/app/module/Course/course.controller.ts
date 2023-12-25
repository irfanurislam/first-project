import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { CourseServices } from "./course.service";


const createCourse = catchAsync(async (req, res, next) => {
  const result = await CourseServices.createCourseIntoDB(
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
  const result = await CourseServices.getALlCoursesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " a retireve  a successfully ",
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "a retireve  successfully ",
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await CourseServices.updateCourseIntoDB(
    id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic faculty  a creat a successfully ",
    data: result,
  });
});



const deleteCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CourseServices.deleteCourseFromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "a deleted  successfully ",
      data: result,
    });
  });

  const assignFacultiesWithCourse = catchAsync(async (req, res) => {
    const { courseId } = req.params;
    const { faculties } = req.body;
  
    const result = await CourseServices.assignFacultiesWithCourseIntoDB(
      courseId,
      faculties,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faculties assigned  succesfully',
      data: result,
    });
  });

export const CourseControllers = {
    createCourse,
  getAllCourses,
  updateCourse,
  getSingleCourse,
  deleteCourse,
  assignFacultiesWithCourse
};
