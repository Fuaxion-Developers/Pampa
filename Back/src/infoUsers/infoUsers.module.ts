import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfoUser } from "./infoUsers.entity";
import { InfoUsersController } from "./infoUsers.controller";
import { InfoUsersService } from "./infoUsers.service";
import { InfoUsersRepository } from "./infoUsers.repository";

@Module({
    imports: [TypeOrmModule.forFeature([InfoUser])],
    controllers: [InfoUsersController],
    providers: [InfoUsersService, InfoUsersRepository],
    exports: [InfoUsersService, TypeOrmModule],
})
export class InfoUsersModule{}