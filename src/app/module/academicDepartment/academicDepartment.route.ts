import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { academicDepartmentValidation } from "./academicDepartment.validaition";
import { academicDepartmentControllers } from "./academicDepartment.controller";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
   academicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  academicDepartmentControllers.createAcademicDepartment
);
router.get(
  "/:departmentId",
  academicDepartmentControllers.getSingleAcademicFacultyFromDB
);
router.patch(
  "/:departmentId",
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  academicDepartmentControllers.updateAcademicFaculty
);
router.get("/", academicDepartmentControllers.getAllAcademicDepartments);
// router.delete("/:studentId", StudentController.deleteStudents);

export const academicDepartmentRoutes = router;
