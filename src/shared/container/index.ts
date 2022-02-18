import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/implementations/CategoriesRepositories";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpercificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/implementations/SpecificationsRepository";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUsersRepositories } from "../../modules/accounts/repositories/implementations/IUsersRepositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<ISpercificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepositories>(
  "UsersRepositories",
  UsersRepository,
);
