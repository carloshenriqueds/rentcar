import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    
    beforeEach(() => {
        userRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "1234564",
            email: "user@test.com",
            password: "1234",
            name: "Iser name"
        }
        await createUserUseCase.execute(user);
        const result = await authenticateUserUseCase.execute({email: user.email, password: user.password});
        expect(result).toHaveProperty("token");
    })

    it("should not be able to authenticate an  ", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({email:"false@gmail.com", password: "user.password"});
        }).rejects.toBeInstanceOf(AppError);
    });

    
    it("should not be able to ahtneticate with incorrect password ", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "1234564",
                email: "user@test.com",
                password: "1234",
                name: "Iser name"
            }
            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({email:"user@test.com", password: "user.password"});
        }).rejects.toBeInstanceOf(AppError);
    });
})