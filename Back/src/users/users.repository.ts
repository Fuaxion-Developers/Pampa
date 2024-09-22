import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
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

  async getUserByEmail(email: string): Promise<User> {
    const userByEmail = this.usersRepository
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
    const userByCuitl = this.usersRepository
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
