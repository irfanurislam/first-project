import { Schema, model, connect } from "mongoose";
import validator from 'validator';
import config from "../config";
import {
  TGuardian,
  TLocalGuardian,
  UserName,
  TStudent,
  StudentModel,
  
} from "./student/student.interface";

import { boolean } from "joi";
// import { config } from "dotenv";

const userSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true,"first name lage lagbe lagbei"],
    maxlength: [20,'first name 20 more than not '],
    trim:true,
    validate: {
      validator: function(value:string){
        const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNamestr === value;
      },
      message:"{VALUE } IS NOT IN capitaileized format"
    }
  },
  middleName : {
    type: String,
    trim:true,
    validate:{
      validator: (value:string) => validator.isAlpha(value),
      message:` {VALUE} IS NOT VALID`
    }
  },
  lastName: {
    type: String,
    required: [true,"last name ow lage lagbe lagbei"],
    trim:true
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true,"first name lage lagbe lagbei"],
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String , required:true, unique:true},
  user:{
   type:Schema.Types.ObjectId,
   required:[true,'user id is requiered'],
   unique:true,
   ref:'user',
  },
  // password: { type: String , required:true, maxlength:[20,'password cannot length 20 ']},
  // name: userSchema,
  gender:{
    type: String,
    enum: {
      values: ['male', "female","other"],
      message:"{VALUE} the gender feild only: 'male','female', or 'other' "

    },
    required: true
  },
  dateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    validate:{
      validator: (value:string) => validator.isEmail(value),
      message:" {VALUE} IS NOT VALID EMAIL TYPE"
    }
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A", "AB", "B", "O"],
    
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    type:guardianSchema,
    required:true
  },
  localGuardian: {
    type:localGuardianSchema,
    required:true
  },
  profileImage: {
    type: String,
    required: true,
  },
  admissionSemester:{
    type:Schema.Types.ObjectId,
    ref: 'AcademicSemester'
  },
  academicDepartment:{
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment'
  },
  // isActive: {
  //   type:String,
  //   enum:["active", "blocked"],
  //   default:'active'
  // },
  isDeleted:{
    type: Boolean,
    default: false
  }
},{
  toJSON:{
    virtuals:true
  }
});

studentSchema.virtual('fullname').get(function() {
  return `${this.name?.firstName} ${this.name?.middleName} ${this.name.lastName}`
})



// query delte
studentSchema.pre('find', function(next){
  this.find({isDeleted: {$ne:true } })
  next()
})
studentSchema.pre('findOne', function(next){
  this.find({isDeleted: {$ne:true } })
  next()
})
studentSchema.pre('aggregate', function(next){
  this.pipeline().unshift({$match: {isDeleted: {$ne:true}}})
  next()
})





// creating a custom static method

studentSchema.statics.isUserExists = async function(id:string) {
  const existingUser = await Student.findOne({id})
}


// studentSchema.methods.isUserExists = async function(id:string) {
//   const existingUser = await Student.findOne({id});

//   return existingUser
// }

export const Student = model<TStudent, StudentModel>("student", studentSchema);
