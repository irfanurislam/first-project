import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().min(1),
  lastName: z.string().min(1),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

export const createStudenValidationtSchema = z.object({
  body:z.object({
    // id: z.string(),
    password: z.string().max(20),
    student:z.object({
      name: userNameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string(),
    email: z.string().email(),
    contactNo: z.string().min(1),
    emergencyContactNo: z.string().min(1),
    bloodGroup: z.enum(['A', 'AB', 'B', 'O']),
    presentAddress: z.string().min(1),
    permanentAddress: z.string().min(1),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImage: z.string().min(1),
    })
    // isActive: z.enum(['active', 'blocked']),
    // isDeleted:z.boolean()
  })
})

export const  studenValidationts={
     createStudenValidationtSchema
}