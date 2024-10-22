import { Body, Controller, Patch, UseGuards } from '@nestjs/common';
import { InfoUsersService } from './infoUsers.service';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateInfoUserDto } from './dtos/updateInfoUser.dto';
import { InfoUser } from './infoUsers.entity';
import { DRoles } from '../decorators/roles.decorator';
import { Roles } from '../users/enums/roles.enum';
import { UsersGuard } from '../users/guards/users.guard';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('InfoUsers')
@Controller('info-users')
export class InfoUsersController {
  constructor(private readonly infoUsersService: InfoUsersService) {}

  @ApiBearerAuth()
  @Patch('update-infouser')
  @DRoles(Roles.ADMIN)
  @UseGuards(UsersGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar información de usuario.' })
  @ApiResponse({ status: 201, description: 'Información actualizada.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en solicitud.' })
  updateInfoUser(@Body() infoUserToUpdate: UpdateInfoUserDto) {
    let infoUser: Omit<InfoUser, 'comments'>;
    if(!infoUserToUpdate.company) {
        infoUser = { company: null, ...infoUserToUpdate};
    } else {
        infoUser = { ...infoUserToUpdate, company: infoUserToUpdate.company };
    }
    return this.infoUsersService.updateInfoUser(infoUser);
  }
  
}
