import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoryRepository) {}

    async execute({name, description}: IRequest): Promise<void>{
        const categoryAlreadyExist = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExist) {
            throw new Error("Category name already exists!");
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase }
