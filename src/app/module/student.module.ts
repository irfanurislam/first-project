import { Schema, model, connect } from "mongoose";
import validator from 'validator';

import {
  Guardian,
  LocalGuardian,
  UserName,
  Student,
} from "./student/student.interface";

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

const guardianSchema = new Schema<Guardian>({
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

const localGuardianSchema = new Schema<LocalGuardian>({
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

const studentSchema = new Schema<Student>({
  id: { type: String , required:true, unique:true},
  name: userSchema,
  gender:{
    type: String,
    enum: {
      values: ['male', "female","other"],
      message:"{VALUE} the gender feild only: 'male','female', or 'other' "

    },
    required: true
  },
  dateOfBirth: {
    type: String,
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
  isActive: {
    type:String,
    enum:["active", "blocked"],
    default:'active'
  },
});

export const StudentModel = model<Student>("student", studentSchema);
