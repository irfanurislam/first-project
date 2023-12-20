import { NextFunction, Request, RequestHandler, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res, next) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentintoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic deopartment  a creat a successfully ",
    data: result,
  });
});

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic department  a creat a successfully ",
    data: result,
  });
});
const getSingleAcademicFacultyFromDB = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(departmentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic department  a creat a successfully ",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res, next) => {
  const { departmentId } = req.params;
  const result = await AcademicDepartmentServices.updateAcademicDepartmentintoDB(
    departmentId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic department  a retireive  a successfully ",
    data: result,
  });
});

export const academicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getSingleAcademicFacultyFromDB,
    updateAcademicFaculty,
};
