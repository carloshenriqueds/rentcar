import { Category } from "../model/Category";

interface ICategoriesRepositoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICategoriesRepositoryDTO): void;
}

export { ICategoryRepository, ICategoriesRepositoryDTO }