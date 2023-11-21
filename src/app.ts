import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/module/student/student.route";
const app: Application = express();
// NODE_ENV=development
//PORT=5000
//DATABASE_URL = mongodb+srv://admin_um:aqpFcxXOJvBOPJP1@cluster0.psezczp.mongodb.net/first-project?retryWrites=true&w=majority
// parser
app.use(express.json());
app.use(cors());

app.use("/api/v1/students", StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get("/", getAController);

export default app;
