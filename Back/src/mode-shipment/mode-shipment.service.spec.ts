import { Test, TestingModule } from '@nestjs/testing';
import { ModeShipmentService } from './mode-shipment.service';

describe('ModeShipmentService', () => {
  let service: ModeShipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModeShipmentService],
    }).compile();

    service = module.get<ModeShipmentService>(ModeShipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
