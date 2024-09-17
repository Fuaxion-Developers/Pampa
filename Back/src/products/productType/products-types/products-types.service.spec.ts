import { Test, TestingModule } from '@nestjs/testing';
import { ProductsTypesService } from './products-types.service';

describe('ProductsTypesService', () => {
  let service: ProductsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsTypesService],
    }).compile();

    service = module.get<ProductsTypesService>(ProductsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
