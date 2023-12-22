import { Schema, model } from "mongoose";
import { TCourse, TPreRequisiteCourses } from "./course.interface";

const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourses>({
    course:{
        type:Schema.Types.ObjectId,
        ref:'Course'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})



const courseSchema = new Schema<TCourse>({
    title:{
        type:String,
        unique:true,
        trime:true,
        required:true,

    },
    prefix:{
        type:String,
       
        trime:true,
        required:true,
    },
    code:{
        type:Number,
       
        trime:true,
        required:true,
    },
    credits:{
        type:Number,
        trime:true,
        required:true,
    },
    preRequisiteCourses:[preRequisiteCoursesSchema],
    isDeleted:{
        type:Boolean,
        default:false
    }
})

export const Course = model <TCourse>('Course',courseSchema)