import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRouter } from "./routes/Specifications.routes";

import "./database";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRouter);

app.listen(3333);