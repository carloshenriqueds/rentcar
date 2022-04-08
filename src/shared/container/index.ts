import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementation/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);


container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);