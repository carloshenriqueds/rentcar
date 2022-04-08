

import { AppError } from "@errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategory: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;


describe("Create Category", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })

    it("should be able to create a new category", async () => {
        let categoryy = {
            name: "categoryName",
            description: "Category description test"
        };
        await createCategory.execute(categoryy);
        const categoryCreated = await categoriesRepositoryInMemory.findByName(categoryy.name);
        console.log(categoryCreated);
        expect(categoryCreated).toHaveProperty("id");
    })

    it("should not be able a new category with name exists", async () => {
        expect( async () => {
            let categoryy = {
                name: "categoryName",
                description: "Category description test"
            };
            await createCategory.execute(categoryy);
    
            await createCategory.execute(categoryy);
        }).rejects.toBeInstanceOf(AppError);

        
    })
})