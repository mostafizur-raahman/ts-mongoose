import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        // will call service func to send data
        const result = await StudentServices.createStudentIntoDB(studentData);
        // send response
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result,
        });
    } catch (error) {
        res.json({ error });
    }
};

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsToDB();
        res.status(200).json({
            success: true,
            message: "Student is retriving successfully",
            data: result,
        });
    } catch (error) {
        res.json({ error });
    }
};
export const StudentController = {
    createStudent,
    getAllStudents,
};
