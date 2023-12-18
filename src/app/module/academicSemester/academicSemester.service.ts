import { error } from "console";
import { TAcademicSemesterNameCodeMapper, TAcademicsemester, } from "./academicSemester.interface";
import { AcamedicSemester } from "./academicSemester.model";
import { academicSemesterNameCodeMapper } from "./academicSemester.constant";

const createAcademicSemesterintoDB = async(payload:TAcademicsemester) =>{



if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
    throw new Error('invalid semester code')
}




const result = await AcamedicSemester.create(payload);
return result;


}

export const AcademicSemesterServices = {
    createAcademicSemesterintoDB
}