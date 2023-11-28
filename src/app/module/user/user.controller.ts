import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response,next:NextFunction) => {
    try {
  
  
      // Joi validator schema using 
      const { password,student: studentData } = req.body;
      //  const {error} = studentValidationSchema.validate(studentData)
  
      // zod validation
    //   const zodParsedData = studentValidationSchema.parse(studentData)
  
      const result = await UserService.createStudentIntoDB(password,studentData);
   
    //   if(error){
    //     res.status(500).json({
    //       success: false,
    //       message: "something went wrong",
    //       error: error.details,
    //   })
  
    // }
  
      
  
      res.status(200).json({
        success: true,
        message: "student is created",
        data: result,
      });
    } catch (err) {
      next(err)
    }
  };

  
export const UserControllers = {
    createStudent,
    
  };
