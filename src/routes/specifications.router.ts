import { Router } from 'express';
import { SpecificationsRepository  } from '../modules/cars/repositories/implementation/SpecificationsRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const specificationsRoutes = Router();
const createCategoryController = new CreateSpecificationController();

specificationsRoutes.post("/", createCategoryController.handle);

specificationsRoutes.get("/", (request, response) => {

});

export { specificationsRoutes };