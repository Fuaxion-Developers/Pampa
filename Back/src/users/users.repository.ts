import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { MoreThan, Repository } from 'typeorm';
import { Roles } from './enums/roles.enum';
import { ComparePass } from 'src/utils/comparePass';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAllUsers({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<User[]> {
    const queryBuilder = this.usersRepository
      .createQueryBuilder('users')
      .withDeleted()
      .select(['users.id', 'users.email', 'users.deleteDate', 'users.role'])
      .leftJoinAndSelect('users.info_user', 'info_user')
      .skip((page - 1) * limit)
      .take(limit);

    return await queryBuilder.getMany();
  }

  async getUserById(id: string) {
    const user: User = await this.usersRepository
    .createQueryBuilder('users')
    .withDeleted()
    .where('users.id = :id', { id })
    .select([
      'users.id',
      'users.email',
      'users.password',
      'users.deleteDate',
      'users.role',
      'users.info_user',
    ])
    .leftJoinAndSelect('users.info_user', 'info_user')
    .getOne();

    return user;
  }

  async getUserByToken(token: string) {
    const user: User = await this.usersRepository.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: MoreThan(new Date()),
      }
    })

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const userByEmail = await this.usersRepository
      .createQueryBuilder('users')
      .withDeleted()
      .where('users.email = :email', { email })
      .select([
        'users.id',
        'users.email',
        'users.password',
        'users.deleteDate',
        'users.role',
        'users.info_user',
      ])
      .leftJoinAndSelect('users.info_user', 'info_user')
      .getOne();

    return userByEmail;
  }

  async getUserByCuitl(cuitl: string): Promise<User> {
    const userByCuitl = await this.usersRepository
      .createQueryBuilder('users')
      .withDeleted()
      .select([
        'users.id',
        'users.email',
        'users.deleteDate',
        'users.role',
        'users.info_user',
      ])
      .leftJoinAndSelect('users.info_user', 'info_user')
      .where('info_user.cuit_cuil = :cuitl', { cuitl })
      .getOne();

    return userByCuitl;
  }

  async clientsQuantity() {
    const activeClientsQuantity: number = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.deleteDate IS NULL')
      .andWhere('users.role = :role', { role: 'Cliente'})
      .getCount();

    const clientsQuantity: number = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.role = :role', { role: 'Cliente'})
      .getCount();

    return { total: clientsQuantity, active: activeClientsQuantity, inactive: clientsQuantity-activeClientsQuantity };
  }

  async signUp(
    user: Omit<
      User,
      'id' | 'resetPasswordToken' | 'resetPasswordExpires' | 'deleteDate'
    >,
  ): Promise<User> {
    const userCreated: User = await this.usersRepository.save(user);
    return userCreated;
  }

  async changePass(userToUpdate: User): Promise<User> {
    return this.usersRepository.save(userToUpdate);
  }

  async updateUser(userInfo: { id: string, email?: string, password?: string, resetPasswordToken?: string, resetPasswordExpires?: Date }) {
    const user: User = await this.usersRepository.findOne({
      where: {
        id: userInfo.id,
      }
    })
    if (!user) {
      return;
    }
    
    const userUpdated: User = await this.usersRepository.save(userInfo);
    return userUpdated;
  }

  async deleteUser(userToDelete: User): Promise<string> {
    await this.usersRepository.softDelete(userToDelete.id);
    return `Usuario con ID ${userToDelete.id} eliminado`;
  }

  async restoreUser(email: string, password: string): Promise<User> {
    const userToRestore: User = await this.usersRepository
      .createQueryBuilder('users')
      .withDeleted()
      .addSelect('users.password')
      .where('users.email = :email', { email })
      .andWhere('users.deleteDate IS NOT NULL')
      .select(['users.password', 'users.id', 'users.email'])
      .getOne()
    
    if (!userToRestore) throw new BadRequestException('Credenciales erroneas. No es posible restaurar el usuario.');

    if (await ComparePass(password, userToRestore.password)) {
      await this.usersRepository.restore(userToRestore);
      return userToRestore;
    }

    throw new BadRequestException('Credenciales erroneas. No es posible restaurar el usuario.');
  }
}
