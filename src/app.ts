import express, { Application, Request, Response, json } from "express";
import cors from "cors";
import { StudentsRoutes } from "./app/modules/student/student.route";
const app: Application = express();
//parser
app.use(express.json());
app.use(cors());

// applications route
app.use("/api/v1/students", StudentsRoutes);
app.get("/", (req: Request, res: Response) => {
    const a = 10;

    res.send(a);
});
export default app;
