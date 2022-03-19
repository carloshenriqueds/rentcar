import { Router } from 'express';
import { SpecificationsRepository  } from '../modules/cars/repositories/implementation/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router();
const categoriesRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {

});

export { specificationsRoutes };