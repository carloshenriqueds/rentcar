import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "@errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    }
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {}
    async execute({email, password}: IRequest): Promise<IResponse> {
        const userFound = await this.usersRepository.findByEmail(email);
        if(!userFound) {
            throw new AppError("Email or password incorrect!");
        }
        const passwordMatch = await compare(password, userFound.password);
        if(!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, "744a008834b24a077de7620b56b8b99c", {
            subject: userFound.id,
            expiresIn: "1d"
        });
        const tokenReturn: IResponse = {
            token,
            user: {
                name: userFound.name,
                email: userFound.email
            }
        }
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }