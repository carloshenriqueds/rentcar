import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "../../../repositories/ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository {
    
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name
        });
        return specification;
    }

    async create({ name, description }: ISpecificationRepositoryDTO): Promise<void> {
       const specification = this.repository.create({
           description,
           name
       });

       await this.repository.save(specification);
       
    }

}

export { SpecificationsRepository }