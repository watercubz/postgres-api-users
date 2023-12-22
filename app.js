import express, { json } from "express";
import { valideMiddleware } from "./middlewares/cors.js";
import booksRouter from "./routes/books.routes.js";
import router from "./routes/index.routes.js";

const app = express();

app.use(json());
app.use(router);
app.use(booksRouter);
app.use(valideMiddleware());
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
