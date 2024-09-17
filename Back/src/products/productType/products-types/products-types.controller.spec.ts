import { Test, TestingModule } from '@nestjs/testing';
import { ProductsTypesController } from './products-types.controller';

describe('ProductsTypesController', () => {
  let controller: ProductsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsTypesController],
    }).compile();

    controller = module.get<ProductsTypesController>(ProductsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
