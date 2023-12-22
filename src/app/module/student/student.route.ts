import express from "express";
import { StudentController } from "./student.controller";
import validateRequest from "../../middleware/validateRequest";
import { updateStudentValidationSchema } from "./student.validation";

const router = express.Router();

// router.post("/create-student", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getSingleStudents);

router.patch("/:id",validateRequest(updateStudentValidationSchema), StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudents);

export const StudentRoutes = router;
