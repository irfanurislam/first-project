import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";


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

const getAllStudents = async (req: Request, res:Response, next:NextFunction) =>{
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: "student is created",
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   message: error.message || "student is worng error",
    //   error: error,

      
    // });
    next(err)
  }
}
const getSingleStudents = async (req: Request, res:Response,next:NextFunction) =>{
  try {
    const {studentId} = req.params
    const result = await StudentServices.getSingleStudentsFromDB(studentId)
    res.status(200).json({
      success: true,
      message: "student is created",
      data: result,
    });
  } catch (err) {
    next(err)
  }
}
const deleteStudents = async (req: Request, res:Response,next:NextFunction) =>{
  try {
    const {studentId} = req.params
    const result = await StudentServices.deleteStudentsFromDB(studentId)
    res.status(200).json({
      success: true,
      message: "student is created",
      data: result,
    });
  } catch (err) {
    next(err)
  }
}

export const StudentController = {

  getAllStudents,
  getSingleStudents,
  deleteStudents
};
