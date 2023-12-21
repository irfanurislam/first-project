import { error } from "console";
import { Student } from "../student.module";
import { StudentModel, TStudent } from "./student.interface";
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { User } from "../user/user.model";

// const createStudentIntoDB = async (studentData: TStudent) => {

//  if(await Student.isUserExists(studentData.id)){
//     throw new Error('new already exits')
//   }

//   const result = await Student.create(studentData);

//   // static method

//   // instance method
//   // const student = new Student(studentData);
//   // if(await student.isUserExists(studentData.id)) {
//   //   throw new Error('user already exits')
//   // }

//   // const result = await student.save()

//   return result;
// };

const getAllStudentsFromDB = async (query:Record<string,unknown>) => {


  let searchTerm = '';
  if(query?.searchTerm){
    searchTerm = query?.searchTerm as string
  }
  const result1 = await Student.find({
    $or:['email','name.firstname','presentAddress'].map((feild) =>({
      [feild]:{$regex:searchTerm, $options:'i'},
    })),
  }
  
  )

  const result = await Student.find({
    $or:['email','name.firstname','presentAddress'].map((feild) =>({
      [feild]:{$regex:searchTerm, $options:'i'},
    })),
  })
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({id});

  const result = await Student.findOne({id})
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};
const updateStudentIntoDB = async(id:string,payload:Partial<TStudent>)=>{

  const {name,guardian,localGuardian,...remainingStudentData}= payload;

  const modifiedUpdatedData: Record<string,unknown> ={
    ...remainingStudentData
  };

  if(name&& Object.keys(name).length){
    for (const [key,value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value
      
    }
  }
  if(guardian&& Object.keys(guardian).length){
    for (const [key,value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value
      
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }







 const result = await Student.findOneAndUpdate({id},modifiedUpdatedData,{new:true,runValidators:true})
 return result
}





const deleteStudentsFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const deletedStudent = await Student.findByIdAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
 if(!deletedStudent){
  throw new AppError(httpStatus.BAD_REQUEST,"failed to be deleted stident")
 }
 const deletedUser = await User.findByIdAndUpdate(
  { id },
  { isDeleted: true },
  { new: true, session }
 )
 if(!deletedUser){
  throw new AppError(httpStatus.BAD_REQUEST,"failed to be deleted stident")
 }

 await session.commitTransaction()
 await session.endSession()

    
    return deletedStudent;
  } catch (error) {}

  await session.abortTransaction()
 await session.endSession()
 throw new AppError(httpStatus.BAD_REQUEST,"failed to be deleted stident")
  
};







export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  updateStudentIntoDB,
  deleteStudentsFromDB,
};
