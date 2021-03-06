import { Router } from 'express';
import { ensureAuthenticated } from "../shared/infra/http/middlewares/ensureAuthenticated";
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const specificationsRoutes = Router();
const createCategoryController = new CreateSpecificationController();
specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createCategoryController.handle);
specificationsRoutes.get("/", (request, response) => {});

export { specificationsRoutes };