import { Module } from '@nestjs/common';
import { ModeShipmentService } from './mode-shipment.service';
import { ModeShipmentController } from './mode-shipment.controller';
import { ModeShipmentRepository } from './mode-shipment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeShipment } from './mode-shipment.entity';

@Module({
  providers: [ModeShipmentService],
  controllers: [ModeShipmentController],
})
export class ModeShipmentModule {}
