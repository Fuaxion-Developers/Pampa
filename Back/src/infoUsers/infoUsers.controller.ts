import { Body, Controller, Patch } from '@nestjs/common';
import { InfoUsersService } from './infoUsers.service';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateInfoUserDto } from './dtos/updateInfoUser.dto';
import { InfoUser } from './infoUsers.entity';

@ApiTags('InfoUsers')
@Controller('info-users')
export class InfoUsersController {
  constructor(private readonly infoUsersService: InfoUsersService) {}

  @Patch('update-infouser')
  @ApiOperation({ summary: 'Actualizar información de usuario.' })
  @ApiResponse({ status: 201, description: 'Información actualizada.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en solicitud.' })
  updateInfoUser(@Body() infoUserToUpdate: UpdateInfoUserDto) {
    let infoUser: InfoUser;
    if(!infoUserToUpdate.company) {
        infoUser = { company: null, ...infoUserToUpdate};
    } else {
        infoUser = { ...infoUserToUpdate, company: infoUserToUpdate.company };
    }
    return this.infoUsersService.updateInfoUser(infoUser);
  }
  
}
