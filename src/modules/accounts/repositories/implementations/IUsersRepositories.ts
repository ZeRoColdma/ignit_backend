import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entites/User";

interface IUsersRepositories {
  create(data: ICreateUserDTO): Promise<void>;

  findByEmail(email: string): Promise<User>;
}

export { IUsersRepositories };
