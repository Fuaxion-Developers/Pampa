import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ConfirmPassInterceptor } from './confirmPass.interceptor';
import { CreateUserDto } from './dtos/createUser.dto';
import {
  CUITLApiQueries,
  EmailApiQueries,
  LimitApiQueries,
  PageApiQueries,
} from 'src/config/swagger-config';
import { CuitlDto, EmailDto, PaginationDto } from 'src/common/dto/common.dto';
import { SignInDto } from './dtos/signIn.dto';
import { UpdatePasswordDto } from './dtos/updatePassword.dto';
import { RestorePasswordDto } from './dtos/restorePassword.dto';
import { UserEmailDto } from './dtos/userEmail.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los usuarios, incluyendo inactivos',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve un arreglo con todos los usuarios',
  })
  @ApiQuery(PageApiQueries)
  @ApiQuery(LimitApiQueries)
  getAllUsers(@Query() paginationDto: PaginationDto) {
    return this.usersService.getAllUsers(paginationDto);
  }

  @Get('by-email')
  @ApiOperation({
    summary: 'Obtener la información de un usuario, por su correo electrónico.',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve la información de un usuario por correo electrónico',
  })
  @ApiQuery(EmailApiQueries)
  getUserByEmail(@Query() email: EmailDto) {
    return this.usersService.getUserByEmail(email.email);
  }

  @Get('by-cuitl')
  @ApiOperation({
    summary:
      'Obtener la información de un usuario, por su número de CUIT/CUIL.',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve la información de un usuario por CUIT/CUIL',
  })
  @ApiQuery(CUITLApiQueries)
  getUserByCuitl(@Query() cuitl: CuitlDto) {
    return this.usersService.getUserByCuitl(cuitl.cuitl);
  }

  @Post('signup')
  @ApiOperation({
    summary:
      'Crear un usuario. El cuerpo de la solicitud debe tener confirmPass',
  })
  @ApiResponse({ status: 201, description: 'Retorna el usuario creado.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en la solicitud.' })
  @UseInterceptors(ConfirmPassInterceptor)
  signUp(@Body() allUserInfo: CreateUserDto) {
    const user = { email: allUserInfo.email, password: allUserInfo.password };
    const infoUser = {
      first_name: allUserInfo.first_name,
      last_name: allUserInfo.last_name,
      cuit_cuil: allUserInfo.cuit_cuil,
      company: allUserInfo.company,
      phone: allUserInfo.phone,
      address: allUserInfo.address,
      city: allUserInfo.city,
      state: allUserInfo.state,
      zipCode: allUserInfo.zipCode,
    };
    return this.usersService.signUp(user, infoUser);
  }

  @Post('signin')
  @ApiOperation({ summary: 'Validación de credenciales para iniciar sesión.' })
  @ApiResponse({ status: 201, description: 'Regresa el token de acceso.' })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Credenciales inválidas.',
  })
  signIn(@Body() signInInfo: SignInDto) {
    return this.usersService.signIn(signInInfo);
  }

  @Post('request-restore-password')
  @ApiOperation({ summary: 'Solicitud para restaurar contraseña.' })
  @ApiResponse({ status: 201, description: 'Envía correo electrponico con link para restaurar contraseña.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en la solicitud.' })
  requestRestorePassword(@Body() email: UserEmailDto) {
    return this.usersService.requestRestorePassword(email.email);
  }

  @Post('restore-password/:token')
  @ApiOperation({ summary: 'Restaurar contraseña.' })
  @ApiResponse({ status: 201, description: 'Contraseña restaurada.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en la solicitud.' })
  restorePassword(@Param('token') token: string, @Body() newPasswordInfo: RestorePasswordDto) {
    return this.usersService.restorePassword(token, newPasswordInfo);
  }

  @Patch('change-password')
  @ApiOperation({ summary: 'Cambiar contraseña.' })
  @ApiResponse({ status: 201, description: 'Contraseña actualizada con éxito.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en solicitud.' })
  changePass(@Body() newPass: UpdatePasswordDto) {
    return this.usersService.changePass(newPass);
  }

  @Delete('delete')
  @ApiOperation({
    summary:
      'Eliminar un usuario. El cuerpo de la solicitud debte tener confirmPass.',
  })
  @ApiResponse({ status: 201, description: 'Acción confirmada.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en solicitud.' })
  @UseInterceptors(ConfirmPassInterceptor)
  deleteUser(@Body() userInfo: SignInDto) {
    return this.usersService.deleteUser(userInfo);
  }

  @Patch('restore')
  @ApiOperation({
    summary:
      'Restaurar un usuario. El cuerpo de la solicitud debe tener confirmPass.',
  })
  @ApiResponse({ status: 201, description: 'Retorna el usuario restaurado.' })
  @ApiBadRequestResponse({ status: 400, description: 'Error en solicitud.' })
  @UseInterceptors(ConfirmPassInterceptor)
  restoreUser(@Body() userInfo: SignInDto) {
    return this.usersService.restoreUser(userInfo);
  }
}
