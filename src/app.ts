import express, { Application, Request, Response  } from "express";
import morgan from "morgan";
import modules from "./modules";

const app: Application = express();

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  }),
);
app.use(express.json());

modules(app);

// catch all routers
app.use("*", (req: Request, res: Response) =>
  res.status(404).json({
    message: "Not Found. Use /api/v1 to access the api",
  }),
);

export default app;
