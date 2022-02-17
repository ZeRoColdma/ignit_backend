import { CategoriesRepository } from "../../implementations/CategoriesRepositories";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoriesController };
