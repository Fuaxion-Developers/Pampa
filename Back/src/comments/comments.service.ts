import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { Comments } from './comments.entity';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { InfoUser } from 'src/infoUsers/infoUsers.entity';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository,
    private readonly usersService: UsersService,
  ) {}

  async getAllComments({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<Comments[]> {
    return await this.commentsRepository.getAllComments({ page, limit });
  }

  async getBest10Comments(): Promise<Comments[]> {
    return await this.commentsRepository.getBest10Comments();
  }

  async createComment({
    userId,
    comment,
    rate,
  }: {
    userId: string;
    comment: string;
    rate: number;
  }): Promise<Comments> {
    const user: User = await this.usersService.getUserById(userId);
    if (!user)
      throw new BadRequestException('No existe usuario con el id especificado');

    const infoUser: InfoUser = user.info_user as InfoUser;
    const date: Date = new Date();

    const commentInfo: Omit<Comments, 'id'> = {
      infoUser,
      comment,
      rate,
      date,
    };

    return await this.commentsRepository.createComment(commentInfo);
  }
}
