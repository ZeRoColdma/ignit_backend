import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/CreateUserController";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

usersRouter.get("/u", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { usersRouter };
