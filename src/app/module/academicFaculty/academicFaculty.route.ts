import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { academicFacultyValidation } from "./academicFaculty.validation";
import { academicFacultyControllers } from "./academicFaculty.controller";



const router = express.Router();

 router.post("/create-academic-faculty",validateRequest(academicFacultyValidation.createAcademicFacultyValidationSchema) ,academicFacultyControllers.createAcademicFaculty);
 router.get("/:facultyId", academicFacultyControllers.getAllAcademicFaculties);
 router.patch("/:facultyId",validateRequest(academicFacultyValidation.updateAcademicFacultyValidationSchema), academicFacultyControllers.updateAcademicFaculty);
 router.get("/", academicFacultyControllers.getAllAcademicFaculties);
// router.delete("/:studentId", StudentController.deleteStudents);

export const academicFacultyRoutes = router;
