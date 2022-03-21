import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementation/CategoriesRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
