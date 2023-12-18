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

export const AcamedicSemester = model<TAcademicsemester>(
  "AcademicSemester",
  acamedicSemesterSchema
);
