import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: ['./.env.development', './.env'] });

export const env = {
  backUrl: process.env.NEXT_PUBLIC_BACK_URL,
};
