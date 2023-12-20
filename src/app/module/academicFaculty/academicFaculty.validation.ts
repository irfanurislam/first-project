import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
    id:z.string(),
    password:z.string({
        invalid_type_error:'academic faculty  must be string'
    }),
    
})
const updateAcademicFacultyValidationSchema = z.object({
    id:z.string(),
    password:z.string({
        invalid_type_error:'academic faculty  must be string'
    }),
    
})

export const  academicFacultyValidation ={
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema

};