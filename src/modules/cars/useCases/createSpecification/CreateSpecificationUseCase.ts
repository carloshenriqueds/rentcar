import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: SpecificationsRepository){}

    execute({name, description}: IRequest){
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification name already exists!");
        }
    
        this.specificationRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }
