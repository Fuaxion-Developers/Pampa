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
import { JwtModule } from '@nestjs/jwt';
import { env } from './config/envCon';
import { UsersModule } from './users/users.module';
import { InfoUsersModule } from './infoUsers/infoUsers.module';

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
    UsersModule,
    InfoUsersModule,

    JwtModule.register({
      global: true,
      secret: env.jwt_secret,
      signOptions: {
        expiresIn: '1h',
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
