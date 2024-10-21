import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PartialPaymentDto, PaymentDto } from './payments.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  getAll() {
    return this.paymentsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.paymentsService.getById(id);
  }

  @Post()
  create(@Body() payments: PaymentDto) {
    return this.paymentsService.create(payments);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() payments: PartialPaymentDto) {
    return this.paymentsService.update(id, payments);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.paymentsService.delete(id);
  }
}
