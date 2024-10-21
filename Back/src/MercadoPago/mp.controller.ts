import { Body, Controller, Param, Post, Query, Req, Res } from '@nestjs/common';
import { MpService } from './mp.service';
import { AdditionalData, MPDto, paymentData, paymentFormData } from './mp.dto';
import { ApiQuery } from '@nestjs/swagger';
import { PageApiQueries } from '../config/swagger-config';

@Controller('mp')
export class MpController {
  constructor(private readonly mpService: MpService) {}

  @Post('create-preference')
  async createPreference(
    @Query('order_id') order_id: string,
    @Query('user_id') user_id: string,
  ) {
    const preferencia: MPDto = {
      order: order_id,
      user_id,
    };
    return await this.mpService.createPreference(preferencia);
  }

  @Post('success-payment')
  async successPayment(
    @Query('id') id: number,
    @Query('data.id') idPayment: number,
    @Body() data: any,
    @Res() res: any,
  ) {
    const body = {
      ...data,
      idPayment,
      id,
    };
    await this.mpService.successPayment(body);
    return res.send('ok');
  }

  @Post('process-payment')
  async processPayment(@Body() paymentData: paymentData) {
    return await this.mpService.processPayment(paymentData);
  }
}
