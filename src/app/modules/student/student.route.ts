import express from "express";
import { StudentController } from "./student.controller";
const router = express.Router();

// will call controller funcrions
router.post("/create-student", StudentController.createStudent);
router.get("/all-students", StudentController.getAllStudents);
export const StudentsRoutes = router;
