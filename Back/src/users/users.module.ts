import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";
import { InfoUsersModule } from "src/infoUsers/infoUsers.module";

@Module({
    imports: [TypeOrmModule.forFeature([User]), InfoUsersModule],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository]
})
export class UsersModule {}