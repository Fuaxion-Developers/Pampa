import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoUser } from './infoUsers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InfoUsersRepository {
  constructor(
    @InjectRepository(InfoUser)
    private infoUsersRepository: Repository<InfoUser>,
  ) {}

  async getInfoUserByCUITL(cuitl: InfoUser['cuit_cuil']): Promise<InfoUser> {
    const infoUser: InfoUser = await this.infoUsersRepository.findOne({
      where: {
        cuit_cuil: cuitl,
      },
    });

    return infoUser;
  }

  async createInfoUser(infoUser: Omit<InfoUser, 'id'>): Promise<InfoUser> {
    const newInfoUser: InfoUser = await this.infoUsersRepository.save(infoUser)
    return newInfoUser;
  }

  async updateInfoUser(infoUser: InfoUser): Promise<InfoUser> {
    const updatedInfoUser: InfoUser = await this.infoUsersRepository.save(infoUser)
    return updatedInfoUser;
  }
}
