import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppError";

interface IPayload {
    user_id: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("Token missing", 401);
    }
    
    const [, token] = authHeader.split(" ");
    try {
        const { user_id } = verify(token, "744a008834b24a077de7620b56b8b99c") as IPayload;
        
        const usersRepository = new UsersRepository();

        const user = await usersRepository.findByEmail(user_id);

        if (!user) {
            throw new AppError("User does not exists", 401);
        }
        
        next();
    } catch (error) {
        throw new AppError("Invalid token!", 401);
    }

}