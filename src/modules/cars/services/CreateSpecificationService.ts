import { AppError } from "../../../errors/AppError";
import { SpecificationsRepository } from "../infra/typeorm/repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: SpecificationsRepository){}

    execute({name, description}: IRequest){
        const specificationAlreadyExist = this.specificationRepository.findByName(name);

        if (specificationAlreadyExist) {
            throw new AppError("Specification name already exists!");
        }
    
        this.specificationRepository.create({name, description});
    }
}

export { CreateSpecificationService }
