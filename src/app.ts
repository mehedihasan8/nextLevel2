import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());

// all application router

app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

export default app;
