import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrderDetailController } from './order-detail/order-detail.controller';
import { OrderDetailService } from './order-detail/order-detail.service';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ProductsModule } from './products/products.module';
import typeormConfig from './config/typeormConfig';
import { ProductsTypesModule } from './products/productType/products-types/products-types.module';
import { OrderModule } from './orders/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    OrderModule,
    OrderDetailModule,
    ProductsModule,
    ProductsTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
