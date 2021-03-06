
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepositoryDTO, ICategoryRepository } from "../ICategoryRepository";


class CategoriesRepositoryInMemory implements ICategoryRepository {
  
    categories: Category[] = [];

    async findByName(name: string): Promise<any> {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }

    async list(): Promise<Category[]> {
        const all = this.categories;
        return all;
    }

    async create({ name, description }: ICategoriesRepositoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name,
            description
        });
        this.categories.push(category);
    }

}

export { CategoriesRepositoryInMemory }