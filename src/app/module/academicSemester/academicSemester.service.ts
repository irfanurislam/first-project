import { TAcamedicSemesterCode } from "./academicSemester.interface";
import { AcamedicSemester } from "./academicSemester.model";

const createAcademicSemesterintoDB = async(payload:TAcamedicSemesterCode) =>{

const result = await AcamedicSemester.create(payload);
return result;


}

export const AcademicSemesterServices = {
    createAcademicSemesterintoDB
}