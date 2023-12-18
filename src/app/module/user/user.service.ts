import config from "../../config";
import { TAcademicsemester } from "../academicSemester/academicSemester.interface";
import { AcamedicSemester } from "../academicSemester/academicSemester.model";
import { Student } from "../student.module";
import { TStudent } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password:string, payload: TStudent) => {

   const userData: Partial<TUser> ={};
     
   userData.password = password || (config.default_password as string)
    //  set studesnt roll

    userData.role = 'student'


  const admissionSemester:any= await AcamedicSemester.findById(payload.admissionSemester)


//   set manulaly genrated id

// userData.id = '2030010001'
userData.id =await generateStudentId(admissionSemester);

   
     const newUser = await User.create(userData);
   

    // create student 
     if(Object.keys(newUser).length){
        // set id as user

        payload.id = newUser.id

        payload.user = newUser._id
    const newStudent = await Student.create(payload);
     return newStudent
     }

     
   

     
   };

   export const UserService ={
    createStudentIntoDB
   }