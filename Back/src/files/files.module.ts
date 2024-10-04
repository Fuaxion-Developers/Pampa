import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { cloudinaryConfig } from '../config/cloudinaryConfig';
import { FilesController } from './files.controller';

@Module({
  imports: [],
  controllers: [FilesController],
  providers: [FilesService, cloudinaryConfig],
  exports: [FilesService],
})
export class FilesModule {}