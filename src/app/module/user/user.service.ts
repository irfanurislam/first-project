import config from "../../config";
import { Student } from "../student.module";
import { TStudent } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password:string, studentData: TStudent) => {

   const userData: Partial<TUser> ={};
     
   userData.password = password || (config.default_password as string)
    //  set studesnt roll

    userData.role = 'student'

//   set manulaly genrated id

userData.id = '2030010001'

   
     const newUser = await User.create(userData);
   

    // create student 
     if(Object.keys(newUser).length){
        // set id as user

        studentData.id = newUser.id

        studentData.user = newUser._id
    const newStudent = await Student.create(studentData);
     return newStudent
     }

     
   

     
   };

   export const UserService ={
    createStudentIntoDB
   }