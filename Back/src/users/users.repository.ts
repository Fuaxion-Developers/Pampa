import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { Roles } from './roles.enum';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUserByEmail(email: string): Promise<User> {
    const user: User = await this.usersRepository.findOne({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        resetPasswordExpires: true,
        resetPasswordToken: true,
        deletedDate: true,
      },
      withDeleted: true,
    });
    return user;
  }

  async signUp(user: Omit<User, 'id' | 'resetPasswordToken' | 'resetPasswordExpires' | 'deletedDate'>): Promise<User> {
    const userCreated: User = await this.usersRepository.save(user);
    return userCreated;
  }
}
