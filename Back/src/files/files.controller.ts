import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from './dtos/files.dto';
import { ValidationFile } from './pipes/validationFiles.pipe';
import { DRoles } from '../decorators/roles.decorator';
import { Roles } from '../users/enums/roles.enum';
import { UsersGuard } from '../users/guards/users.guard';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('Files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiBearerAuth()
  @Post('upload')
  @DRoles(Roles.ADMIN)
  @UseGuards(UsersGuard, RolesGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Cargar un archivo a Cloudinary' })
  @ApiResponse({ status: 200, description: 'Respuesta de Cloudinary' })
  @ApiBody({
    description: 'Imagen a cargar (solo archivos .jpg, .jpeg, .png, .gif)',
    type: FileUploadDto,
  })
  uploadFile(
    @UploadedFile(ValidationFile) file: Express.Multer.File,
    @Body('path') path: string,
  ) {
    const fileInfo = {
      file,
      path,
    };
    return this.filesService.uploadFile(fileInfo);
  }

  @Post('images')
  @ApiOperation({ summary: 'Obtener imágenes desde Cloudinary' })
  @ApiResponse({
    status: 200,
    description: 'Retorna la url segura de la imagen.',
  })
  @ApiBadRequestResponse({ description: 'Respuesta de Cloudinary' })
  @ApiBody({
    description: 'Ruta de la carpeta',
    schema: {
      type: 'object',
      properties: {
        folder: {
          type: 'string',
          example: 'Pampa/categoria1',
        },
      },
    },
  })
  getImages(@Body('folder') folder: string) {
    return this.filesService.getImages(folder);
  }
}
