import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
 
    constructor(private createSpecificationService: CreateSpecificationUseCase){}

    handle(request: Request, response: Response){
        const { name, description } = request.body;
        this.createSpecificationService.execute({name, description});
        return response.status(201).json();
    }
}


export { CreateSpecificationController }