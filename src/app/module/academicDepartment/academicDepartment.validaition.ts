import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:'academic faculty  must be string',
            required_error:'Name is requiered'
        }),
        academicFaculty:z.string({
            invalid_type_error:"academic department error must be stsring",
            required_error: 'faculty its required'
        })

        
    })
})
const updateAcademicDepartmentValidationSchema =  z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:'academic faculty  must be string',
            required_error:'Name is requiered'
        }).optional(),
        academicFaculty:z.string({
            invalid_type_error:"academic department error must be stsring",
            required_error: 'faculty its required'
        })
        
    })
})

export const  academicDepartmentValidation ={
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema

};