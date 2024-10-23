import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: ['./.env.development', './.env'] });

export const env = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'test',
    pass: process.env.DB_PASSWORD || 'test',
    name: process.env.DB_NAME || 'test',
  },
  jwt_secret: process.env.JWT_SECRET || 'clavesecreta',
  mailer: {
    service: process.env.MAILER_SERVICE,
    auth: {
      type: process.env.MAILER_TYPE,
      user: process.env.MAILER_USER,
      clientId: process.env.MAILER_CLIENT_ID,
      clientSecret: process.env.MAILER_CLIENT_SECRET,
      refreshToken: process.env.MAILER_REFRESH_TOKEN,
    },
  },
  frontUrl: process.env.FRONT_URL,
  backUrl: process.env.BACK_URL,
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  MP: {
    MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN,
    MP_PUBLIC_KEY: process.env.MP_PUBLIC_KEY,
  },
};
