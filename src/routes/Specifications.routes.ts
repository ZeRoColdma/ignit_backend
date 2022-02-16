import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificatioService = new CreateSpecificationService(
    specificationRepository,
  );

  createSpecificatioService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRouter };
