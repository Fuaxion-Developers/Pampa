import { Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';
import * as toStream from 'buffer-to-stream';
import { FileUploadDto } from './dtos/files.dto';
import { log } from 'console';

@Injectable()
export class FilesService {
  constructor() {}

  uploadFile(fileInfo: FileUploadDto): Promise<UploadApiResponse> {
    const { path, file } = fileInfo;

    return new Promise((resolve, reject) => {
      log('Uploading file to Cloudinary2');
      const upload = v2.uploader.upload_stream(
        { resource_type: 'auto', folder: path },

        (error, result) => {
          console.log('Uploading file to Cloudinary3');
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else {
            console.log('Cloudinary upload result:', result);
            resolve(result);
          }
        },
      );
      log('Uploading file to Cloudinary4');
      toStream(file.buffer).pipe(upload);
    });
  }

  async getImages(folder: string) {
    const cloudinary = await v2.search
      .expression(`folder:${folder}/*`)
      .execute();
    return cloudinary.resources.map((file) => {
      return file.secure_url;
    });
  }
}
