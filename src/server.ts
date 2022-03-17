import express from 'express';
import { categoriesRoutes } from './routes/categories.router';
const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", categoriesRoutes);

app.listen(3333, () => console.log("Server is running!"));