import express, { json } from "express";
import { valideMiddleware } from "./middlewares/cors.js";
import UserRouter from "./routes/user.routes.js";
import router from "./routes/index.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(json());
app.use(cookieParser());
app.use(valideMiddleware());

app.use(router);
app.use(UserRouter);

app.disable("x-powered-by");

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
