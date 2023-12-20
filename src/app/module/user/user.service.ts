import mongoose from "mongoose";
import config from "../../config";
import { TAcademicsemester } from "../academicSemester/academicSemester.interface";
import { AcamedicSemester } from "../academicSemester/academicSemester.model";
import { Student } from "../student.module";
import { TStudent } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createStudentIntoDB = async (password:string, payload: TStudent) => {

   const userData: Partial<TUser> ={};
     
   userData.password = password || (config.default_password as string)
    //  set studesnt roll

    userData.role = 'student'


  const admissionSemester:any= await AcamedicSemester.findById(payload.admissionSemester)


//   set manulaly genrated id

// userData.id = '2030010001'
const session = await mongoose.startSession()
try {
    session.startTransaction()
  userData.id = await generateStudentId(admissionSemester);

   
     const newUser = await User.create([userData],{session});
   

    // create student 
     if(!newUser.length){

      throw new AppError(httpStatus.BAD_REQUEST, 'failed to create user')

       

     }  
      // set id as user
     payload.id = newUser[0].id

        payload.user = newUser[0]._id
    const newStudent = await Student.create([payload],{session});
    if(!newStudent.length){
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to create student')
    }
    await session.commitTransaction()
    await session.endSession()
    return newStudent


} catch (error) {
  await session.abortTransaction()
  await session.endSession()
  throw new AppError(httpStatus.BAD_REQUEST, 'failed to create student')
}


   

     
   };

   export const UserService ={
    createStudentIntoDB
   }