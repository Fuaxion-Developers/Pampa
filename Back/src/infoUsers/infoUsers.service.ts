import { Injectable } from '@nestjs/common';
import { InfoUsersRepository } from './infoUsers.repository';
import { InfoUser } from './infoUsers.entity';

@Injectable()
export class InfoUsersService {
  constructor(private readonly infoUsersRepository: InfoUsersRepository) {}

  async getInfoUserByCUITL(cuitl: InfoUser['cuit_cuil']) {
    return await this.infoUsersRepository.getInfoUserByCUITL(cuitl);
  }

  async createInfoUser(infoUser: Omit<InfoUser, 'id'>): Promise<InfoUser> {
    const newInfoUser: InfoUser = await this.infoUsersRepository.createInfoUser(infoUser);
    return newInfoUser;
  }

  async updateInfoUser(infoUser: InfoUser): Promise<InfoUser> {
    const updatedInfoUser: InfoUser = await this.infoUsersRepository.updateInfoUser(infoUser);
    return updatedInfoUser;
  }
}
