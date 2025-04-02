import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    async getAll(){
    return await this.productService.getAllProducts();
    }

    @Get(":id")
    async getById(@Param('id', ParseUUIDPipe) id: string){
        return await this.productService.getById(id);
    }
}
