import { Router } from 'express';
import { SpecificationsRepository  } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const categoriesRoutes = Router();
const categoriesRepository = new SpecificationsRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(categoriesRepository);
    createSpecificationService.execute({name, description});
    return response.status(201).json();
});

categoriesRoutes.get("/", (request, response) => {

});

export { categoriesRoutes };