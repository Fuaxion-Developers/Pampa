import { Controller } from "@nestjs/common";
import { InfoUsersService } from "./infoUsers.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('info-users')
@Controller('info-users')
export class InfoUsersController {
    constructor(private readonly infoUsersService: InfoUsersService) {}


}