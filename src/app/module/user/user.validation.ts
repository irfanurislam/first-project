import { z } from "zod";

const userValidationSchema = z.object({
    id:z.string(),
    password:z.string({
        invalid_type_error:'password must be string'
    }).max(20, {message: 'password canot be more than 20 characters'})
    .optional(),
    
})

export const  UserValidation ={
    userValidationSchema
};