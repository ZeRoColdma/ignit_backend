import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepositories } from "../repositories/implementations/IUsersRepositories";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepositories")
    private userRepository: IUsersRepositories,
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {

    const userAreadyExists = await this.userRepository.findByEmail(email);

    if(userAreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      username,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
