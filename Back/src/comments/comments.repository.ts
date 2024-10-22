import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from './comments.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/users.entity';
import { InfoUser } from 'src/infoUsers/infoUsers.entity';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
  ) {}

  async getAllComments({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<Comments[]> {
    const queryBuilder = this.commentsRepository
      .createQueryBuilder('comments')
      .leftJoinAndSelect('comments.infoUser', 'infoUser')
      .skip((page - 1) * limit)
      .take(limit);

    return await queryBuilder.getMany();
  }

  async getBest10Comments(): Promise<Comments[]> {
    const queryBuilder = this.commentsRepository
      .createQueryBuilder('comments')
      .leftJoinAndSelect('comments.infoUser', 'infoUser')
      .orderBy('comments.rate', 'DESC')
      .take(10);

    return await queryBuilder.getMany();
  }

  async createComment(commentInfo: {
    infoUser: InfoUser;
    comment: string;
    rate: number;
    date: Date;
  }) {
    const newComment: Comments =
      await this.commentsRepository.save(commentInfo);
    return newComment;
  }
}
