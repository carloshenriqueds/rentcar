import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    user_id: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { user_id } = verify(token, "744a008834b24a077de7620b56b8b99c") as IPayload;
        
        const usersRepository = new UsersRepository();

        const user = await usersRepository.findByEmail(user_id);

        if (!user) {
            throw new Error("User does not exists");
        }
        
        next();
    } catch (error) {
        throw new Error("Invalid token!");
    }

}