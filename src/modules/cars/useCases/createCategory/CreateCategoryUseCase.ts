import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({name, description}: IRequest){
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExist) {
            throw new Error("Category name already exists!");
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase }
