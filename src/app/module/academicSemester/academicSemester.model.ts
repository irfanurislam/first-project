import { string } from "joi";
import { Schema, model } from "mongoose";

import {
  TAcademicsemester,
  TAcamedicSemesterCode,
  TAcamedicSemesterName,
  TMonths,
} from "./academicSemester.interface";
import { Months, AcamedicSemesterCode, AcamedicSemesterName } from "./academicSemester.constant";



const acamedicSemesterSchema = new Schema<TAcademicsemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcamedicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcamedicSemesterCode,
    },
    startMonth: {
      type: String,
      enum: Months,
    },
    endMonth: {
      type: String,
      enum: Months,
    },
  },
  {
    timestamps: true,
  }
);

acamedicSemesterSchema.pre('save', async function(next){
    const semesterExists = await AcamedicSemester.findOne({
        year:this.year,
        name: this.name
    });
    if(semesterExists){
        throw new Error('semester is already exist')
    }
    next();
})

export const AcamedicSemester = model<TAcademicsemester>(
  "AcademicSemester",
  acamedicSemesterSchema
);
