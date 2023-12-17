import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/module/student/student.route";
import { UserRoutes } from "./app/module/user/user.route";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
const app: Application = express();
// NODE_ENV=development
//PORT=5000
//DATABASE_URL = mongodb+srv://admin_um:aqpFcxXOJvBOPJP1@cluster0.psezczp.mongodb.net/first-project?retryWrites=true&w=majority
// parser
app.use(express.json());
app.use(cors());

// app.use("/api/v1/students", StudentRoutes);
// app.use("/api/v1/users", UserRoutes);

app.use("/api/v1", router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get("/", test);
app.use(globalErrorHandler);
app.use(notFound)
export default app;
