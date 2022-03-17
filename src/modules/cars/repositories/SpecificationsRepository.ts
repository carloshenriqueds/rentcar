import { Specification } from "../model/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "./ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository {
    
    private specificationsList: Specification[]

    constructor() {
        this.specificationsList = []
    }
    findByName(name: string): Specification {
        return this.specificationsList.find(category => category.name === name);
    }

    create({ name, description }: ISpecificationRepositoryDTO): void {
        
        const specification = new Specification(); 
        Object.assign(specification, {
            name,
            description,
            createdAd: new Date()
        });

        this.specificationsList.push(specification);  
    }

}

export { SpecificationsRepository }