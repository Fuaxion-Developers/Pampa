import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { LimitApiQueries, PageApiQueries } from 'src/config/swagger-config';
import { PaginationDto } from 'src/common/dto/common.dto';
import { DRoles } from 'src/decorators/roles.decorator';
import { Roles } from 'src/users/enums/roles.enum';
import { UsersGuard } from 'src/users/guards/users.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { CreateCommentDto } from './dtos/createComment.dto';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los comentarios',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve un arreglo con todos los comentarios',
  })
  @ApiQuery(PageApiQueries)
  @ApiQuery(LimitApiQueries)
  getAllComments(@Query() paginationDto: PaginationDto) {
    return this.commentsService.getAllComments(paginationDto);
  }

  @Get('best-10-comments')
  @ApiOperation({
    summary: 'Obtener los 10 mejores comentarios',
  })
  @ApiResponse({
    status: 200,
    description: 'Devuelve un arreglo con los 10 mejores comentarios',
  })
  getBest10Comments() {
    return this.commentsService.getBest10Comments();
  }

  @ApiBearerAuth()
  @Post('create-comment')
  @DRoles(Roles.CLIENT)
  @UseGuards(UsersGuard, RolesGuard)
  @ApiOperation({
    summary: 'Crear un comentario',
  })
  @ApiResponse({
    status: 201,
    description: 'Retorna el comentario creado',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Error en la solicitud' })
  createComment(@Body() commentInfo: CreateCommentDto) {
    return this.commentsService.createComment(commentInfo);
  }
}
