import express from "express";

import "./database";
import "./shared/container";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRouter } from "./routes/Specifications.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRouter);

app.listen(3333);
