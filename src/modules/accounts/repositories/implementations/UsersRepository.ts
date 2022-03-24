import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOne({email});
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