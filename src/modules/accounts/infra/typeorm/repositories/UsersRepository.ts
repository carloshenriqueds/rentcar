import { ICreateUserDTO } from "@modules/accounts/dto/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../../../repositories/IUsersRepository";



class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findById(id: string): Promise<User | undefined> {
        const user = await this.repository.findOne(id);
        return user;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.repository.findOne({email});
        return user;
    }

    async create({name, driver_license, password, email}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            driver_license,
            password,
            email
        });

        await this.repository.save(user);
    }

}

export { UsersRepository }