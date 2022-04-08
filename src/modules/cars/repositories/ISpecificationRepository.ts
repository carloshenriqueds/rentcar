import { Specification } from "../infra/typeorm/entities/Specification";

interface ISpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): Promise<Specification>;
    create({ name, description }: ISpecificationRepositoryDTO): Promise<void>;
}

export { ISpecificationRepository, ISpecificationRepositoryDTO }