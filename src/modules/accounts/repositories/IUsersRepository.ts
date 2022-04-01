import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../entities/User";


interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
}

export { IUsersRepository }
