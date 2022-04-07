import { Category } from "../entities/Category";

interface ICategoriesRepositoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string):Promise<Category> | Promise<any>;
    list(): Promise<Category[]>;
    create({ name, description }: ICategoriesRepositoryDTO): Promise<void>;
}

export { ICategoryRepository, ICategoriesRepositoryDTO }