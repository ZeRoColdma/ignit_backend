import { ISpercificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpercificationRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
