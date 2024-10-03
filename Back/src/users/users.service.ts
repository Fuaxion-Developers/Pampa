import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.entity';
import { InfoUser } from 'src/infoUsers/infoUsers.entity';
import { InfoUsersService } from 'src/infoUsers/infoUsers.service';
import { Hash } from 'src/utils/hash';
import { Roles } from './enums/roles.enum';
import { ComparePass } from 'src/utils/comparePass';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { env } from '../config/envCon'
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly infoUsersService: InfoUsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly mailService: MailService,
  ) {}

  async getAllUsers({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<User[]> {
    const limitUsers: User[] = await this.usersRepository.getAllUsers({
      page,
      limit,
    });
    return limitUsers;
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.getUserByEmail(email);
  }

  async getUserByCuitl(cuitl: string): Promise<User> {
    return this.usersRepository.getUserByCuitl(cuitl);
  }

  async signUp(
    user: Omit<
      User,
      | 'id'
      | 'resetPasswordToken'
      | 'resetPasswordExpires'
      | 'deleteDate'
      | 'role'
      | 'status'
      | 'info_user'
    >,
    infoUser: Omit<InfoUser, 'id'>,
  ) {
    const userByEmailExist: User = await this.getUserByEmail(user.email);
    if (userByEmailExist)
      throw new BadRequestException(`El email ${user.email} ya existe.`);

    const infoUserByCUITLExist: InfoUser =
      await this.infoUsersService.getInfoUserByCUITL(infoUser.cuit_cuil);
    if (infoUserByCUITLExist)
      throw new BadRequestException(
        `El CUIT/CUIL ${infoUser.cuit_cuil} ya existe.`,
      );

    const role = Roles.CLIENT;

    const info_user: InfoUser =
      await this.infoUsersService.createInfoUser(infoUser);

    user.password = await Hash(user.password);
    const newUser: User = await this.usersRepository.signUp({
      ...user,
      role,
      info_user,
    });

    return newUser;
  }

  async signIn(
    signInInfo: Omit<
      User,
      | 'id'
      | 'resetPasswordToken'
      | 'resetPasswordExpires'
      | 'deleteDate'
      | 'role'
      | 'status'
      | 'info_user'
    >,
  ) {
    const userByEmailExist: User = await this.getUserByEmail(signInInfo.email);
    if (!userByEmailExist)
      throw new BadRequestException('Credenciales de acceso inválidas');
    if (userByEmailExist.deleteDate !== null)
      throw new BadRequestException('Credenciales de acceso inválidas');

    const isPassCorrect: boolean = await ComparePass(
      signInInfo.password,
      userByEmailExist.password,
    );
    if (!isPassCorrect)
      throw new BadRequestException('Credenciales de acceso inválidas');

    const userPayload = {
      id: userByEmailExist.id,
      email: userByEmailExist.email,
      role: userByEmailExist.role,
    };
    const token = this.jwtService.sign(userPayload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    const {
      password,
      resetPasswordToken,
      resetPasswordExpires,
      ...userInfoToReturn
    } = userByEmailExist;

    return { success: 'Acceso autorizado', token, userInfoToReturn };
  }

  async changePass(newPass: {
    email: string;
    currentPass: string;
    newPass: string;
    confirmNewPass: string;
  }): Promise<
    Omit<User, 'password' | 'resetPasswordToken' | 'resetPasswordExpires'>
  > {
    const userToUpdate: User = await this.getUserByEmail(newPass.email);

    if (!userToUpdate)
      throw new BadRequestException('Credenciales de acceso inválidas.');

    const isPassCorrect: boolean = await ComparePass(
      newPass.currentPass,
      userToUpdate.password,
    );
    if (!isPassCorrect)
      throw new BadRequestException('Credenciales de acceso inválidas.');

    if (newPass.newPass !== newPass.confirmNewPass)
      throw new BadRequestException(
        'La contraseña nueva debe ser igual a la confirmación de la contraseña.',
      );

    userToUpdate.password = await Hash(newPass.newPass);

    const userUpdated: User =
      await this.usersRepository.changePass(userToUpdate);
    const {
      password,
      resetPasswordToken,
      resetPasswordExpires,
      ...userInfoToReturn
    } = userUpdated;
    return userInfoToReturn;
  }

  async requestRestorePassword(email: string) {
    const user: User = await this.getUserByEmail(email);
    if(!user) {
      return;
    }

    const authPayload = {
      id: user.id,
      email: user.email,
    }

    const token = this.jwtService.sign(authPayload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(Date.now() + 3600000);
    await this.usersRepository.updateUser(user);

    const resetUrl: string = `${env.frontUrl}restore-password?token=${token}`;

    await this.mailService.sendEmail({
      subjectEmail: 'Restablecimiento de contraseña',
      sendTo: user.email,
      template: 'restorePassword',
      params: {
        resetUrl,
      }
    });

    return 'Verifique su buzón de correo electrónico.'
  }

  async restorePassword(token: string, newPasswordInfo: { newPass: string, confirmNewPass: string }) {
    const { newPass, confirmNewPass } = newPasswordInfo;

    if(newPass !== confirmNewPass) {
      throw new BadRequestException('La nueva contraseña y su confirmación deben ser iguales.')
    }

    const user: User = await this.usersRepository.getUserByToken(token);

    if(!user) {
      throw new BadRequestException('El token no es válido o ya expiró.')
    }

    user.password = await Hash(newPass);

    const newUser: User = await this.usersRepository.updateUser({
      id: user.id,
      email: user.email,
      password: user.password,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    })

    return 'Contraseña restablecida.'
  }

  async deleteUser(userInfo: Partial<User>) {
    const userToDelte: User = await this.getUserByEmail(userInfo.email);
    if (!userToDelte)
      throw new BadRequestException(
        `No existe usuario registrado en email ${userInfo.email}.`,
      );

    if (!(await ComparePass(userInfo.password, userToDelte.password)))
      throw new BadRequestException(
        'Credenciales inválidas. No se pueden eliminar el usuario.',
      );

    return await this.usersRepository.deleteUser(userToDelte);
  }

  async restoreUser(userInfo: Partial<User>) {
    const userToRestore: Partial<User> = await this.usersRepository.restoreUser(
      userInfo.email,
      userInfo.password,
    );
    
    const allUserInfo: User = await this.getUserByEmail(userToRestore.email);

    const {
      password,
      resetPasswordToken,
      resetPasswordExpires,
      ...userInfoToReturn
    } = allUserInfo;
    return userInfoToReturn;
  }
}
