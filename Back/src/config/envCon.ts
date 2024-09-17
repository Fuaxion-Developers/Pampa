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
};
