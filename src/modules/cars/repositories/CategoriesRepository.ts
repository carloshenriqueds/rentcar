import { Category } from "../model/Category";
import { ICategoriesRepositoryDTO, ICategoryRepository } from "./ICategoryRepository";
class CategoriesRepository implements ICategoryRepository{

    private categories: Category[]
    private static INSTANCE: CategoriesRepository;
    
    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICategoriesRepositoryDTO): void {
        const category = new Category(); 
        Object.assign(category, {
            name,
            description,
            createdAd: new Date()
        });
    
        this.categories.push(category);  
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find(category => category.name === name);
    }
}

export { CategoriesRepository }
