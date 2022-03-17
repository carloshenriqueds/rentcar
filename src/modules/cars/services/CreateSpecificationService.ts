import { ISpecificationRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest){
        const specificationAlreadyExist = this.specificationRepository.findByName(name);

        if (specificationAlreadyExist) {
            throw new Error("Specification name already exists!");
        }
    
        this.specificationRepository.create({name, description});
    }
}

export { CreateSpecificationService }
