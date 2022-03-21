import express from 'express';
import swaggerUi from "swagger-ui-express";

import './database';
import "./shared/container";

import { categoriesRoutes } from './routes/categories.router';
import { specificationsRoutes } from './routes/specifications.router';

import swaggerFile from './swagger.json';


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));
