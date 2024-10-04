import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ProductsModule } from './products/products.module';
import typeormConfig from './config/typeormConfig';
import { OrderModule } from './orders/order/order.module';
import { JwtModule } from '@nestjs/jwt';
import { env } from './config/envCon';
import { UsersModule } from './users/users.module';
import { InfoUsersModule } from './infoUsers/infoUsers.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CategoriesModule } from './products/categories/categories.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { ModeShipmentModule } from './mode-shipment/mode-shipment.module';
import { MailModule } from './mail/mail.module';
import { FilesModule } from './files/files.module';

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
    CategoriesModule,
    UsersModule,
    InfoUsersModule,
    OrderStatusModule,
    MailModule,
    FilesModule,

    JwtModule.register({
      global: true,
      secret: env.jwt_secret,
      signOptions: {
        expiresIn: '1h',
      },
    }),

    ModeShipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
