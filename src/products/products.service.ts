import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/Products";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getById(id: string): Promise<Product> {
    const productId =  await this.productRepository.findOneBy({ id });

    if(!productId){
        throw new NotFoundException({message: `Product not found`});
    }else{
        return productId;
    }
  }
}
