import express, { NextFunction, RequestHandler } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
// import { creteStudentvalidationSchema} from '../student/student.validation'
import validateRequest from "../../middleware/validateRequest";
import { createStudenValidationtSchema } from "../student/student.validation";

const router = express.Router();



router.post(
  "/create-student",
  validateRequest(createStudenValidationtSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
