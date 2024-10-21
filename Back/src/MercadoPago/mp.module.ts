import { Module } from '@nestjs/common';
import { MpController } from './mp.controller';
import { MpService } from './mp.service';
import { OrderDetailModule } from 'src/order-detail/order-detail.module';
import { OrderModule } from 'src/orders/order/order.module';
import { InfoUsersModule } from 'src/infoUsers/infoUsers.module';
import { UsersModule } from 'src/users/users.module';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
  imports: [
    OrderDetailModule,
    OrderModule,
    InfoUsersModule,
    UsersModule,
    PaymentsModule,
  ],
  controllers: [MpController],
  providers: [MpService],
  exports: [MpService],
})
export class MpModule {}
