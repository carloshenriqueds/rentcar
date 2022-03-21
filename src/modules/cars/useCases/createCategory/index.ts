/*import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default(): CreateCategoryController => {
    console.log('bora logar abçagasaa');
    const categoriesRepository = new CategoriesRepository();
    
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;
}
*/