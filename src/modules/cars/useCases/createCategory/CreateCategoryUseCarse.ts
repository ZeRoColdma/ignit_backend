import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  execute({ name, description }: IRequest): void {
    const categoriesExists = this.categoriesRepository.findByName(name);

    if (categoriesExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
