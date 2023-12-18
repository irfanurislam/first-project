import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

// const createStudent = async (req: Request, res: Response) => {
//   try {

//     // Joi validator schema using
//     const { student: studentData } = req.body;
//     //  const {error} = studentValidationSchema.validate(studentData)

//     // zod validation
//     const zodParsedData = studentValidationSchema.parse(studentData)

//     const result = await StudentServices.createStudentIntoDB(zodParsedData);

//   //   if(error){
//   //     res.status(500).json({
//   //       success: false,
//   //       message: "something went wrong",
//   //       error: error.details,
//   //   })

//   // }

//     res.status(200).json({
//       success: true,
//       message: "student is created",
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };




const getAllStudents: RequestHandler = catchAsync(async (
  req,
  res,
  next
) => {
 
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student a creat a successfully ",
      data: result,
    });
  
});


const getSingleStudents = catchAsync( async (
  req,
  res,
  next
) => {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student a creat a successfully ",
      data: result,
    }); 
});






const deleteStudents= catchAsync(async(
  req,
  res,
  next
) => {
 
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentsFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student a creat a successfully ",
      data: result,
    });
});

export const StudentController = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
