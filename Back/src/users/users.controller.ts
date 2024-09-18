import { Body, Controller, Post, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ConfirmPassInterceptor } from "./confirmPass.interceptor";
import { CreateUserDto } from "./dtos/createUser.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    @ApiOperation({
        summary: 'Crear un usuario. El cuerpo de la solicitud debe tener confirmPass',
    })
    @ApiResponse({ status: 201, description: 'Retorna el usuario creado.'})
    @ApiBadRequestResponse({ status: 400, description: 'Error en la solicitud.'})
    @UseInterceptors(ConfirmPassInterceptor)
    signUp(@Body() allUserInfo: CreateUserDto){
        const user = { email: allUserInfo.email, password: allUserInfo.password }
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
        }
        return this.usersService.signUp(user, infoUser);
    }
}