import express from "express";
import { academicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../middleware/validateRequest";
import { acamedicSemesterValidations } from "./acamedicSemester.validation";


const router = express.Router();

 router.post("/create-academic-semesters",validateRequest(acamedicSemesterValidations.createAcamedicSemesterValidationSchema) ,academicSemesterControllers.createAcademicSemester);
// router.get("/", StudentController.getAllStudents);
// router.get("/:studentId", StudentController.getSingleStudents);
// router.delete("/:studentId", StudentController.deleteStudents);

export const academicSemesterRoutes = router;
