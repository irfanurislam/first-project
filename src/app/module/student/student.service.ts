import { error } from "console";
import { Student } from "../student.module";
import { TStudent } from "./student.interface";

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

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
    .populate("admissionSemester")
    .populate({
      path:'academicDepartment',
      populate:{
        path:'academicFaculty'
      }
    });
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({id});

  const result = await Student.findById(id) .populate("admissionSemester")
  .populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty'
    }
  });;
  return result;
};
const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
