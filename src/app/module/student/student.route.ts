import express from "express";
import { StudentController } from "./student.controller";
import validateRequest from "../../middleware/validateRequest";
import { updateStudentValidationSchema } from "./student.validation";

const router = express.Router();

// router.post("/create-student", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);
router.get("/:studentId", StudentController.getSingleStudents);

router.patch("/:studentId",validateRequest(updateStudentValidationSchema), StudentController.updateStudent);
router.delete("/:studentId", StudentController.deleteStudents);

export const StudentRoutes = router;
