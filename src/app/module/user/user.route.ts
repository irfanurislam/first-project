import express, { NextFunction, RequestHandler } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
// import { creteStudentvalidationSchema} from '../student/student.validation'
import validateRequest from "../../middleware/validateRequest";
import { createStudenValidationtSchema } from "../student/student.validation";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constant";
import { createFacultyValidationSchema } from "../Faculty/faculty.validation";

const router = express.Router();



router.post(
  "/create-student",
  auth(USER_ROLE.admin),
  validateRequest(createStudenValidationtSchema),
  UserControllers.createStudent
);
router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

// router.post(
//   '/create-admin',
//   // auth(USER_ROLE.admin),
//   validateRequest(createAdminValidationSchema),
//   UserControllers.createAdmin,
// );
export const UserRoutes = router;
