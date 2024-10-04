import { v2 } from 'cloudinary';
import { env } from './envCon';

export const cloudinaryConfig = {
  provide: 'cloudinary',
  useFactory: () => {
    return v2.config({
      cloud_name: env.cloudinary.cloud_name,
      api_key: env.cloudinary.api_key,
      api_secret: env.cloudinary.api_secret,
    });
  },
};