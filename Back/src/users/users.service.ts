import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.entity';
import { InfoUser } from 'src/infoUsers/infoUsers.entity';
import { InfoUsersService } from 'src/infoUsers/infoUsers.service';
import { Hash } from 'src/utils/hash';
import { Roles } from './roles.enum';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly infoUsersService: InfoUsersService,
  ) {}

  async signUp(user: Omit<User, 'id' | 'resetPasswordToken' | 'resetPasswordExpires' | 'deletedDate' | 'role' | 'info_user'>, infoUser: Omit<InfoUser, 'id'>) {
    const userByEmailExist: User = await this.usersRepository.getUserByEmail(
      user.email,
    );
    if (userByEmailExist)
      throw new BadRequestException(`El email ${user.email} ya existe.`);

    const infoUserByCUITLExist: InfoUser =
      await this.infoUsersService.getInfoUserByCUITL(infoUser.cuit_cuil);
    if (infoUserByCUITLExist)
      throw new BadRequestException(
        `El CUIT/CUIL ${infoUser.cuit_cuil} ya existe.`,
      );

    const role = Roles.CLIENT;

    const info_user: InfoUser = await this.infoUsersService.createInfoUser(infoUser);

    user.password = await Hash(user.password);
    const newUser: User = await this.usersRepository.signUp({ ...user, role, info_user });

    return newUser;
  }
}
