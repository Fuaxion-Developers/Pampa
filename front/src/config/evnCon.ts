import "dotenv/config";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: ["./.env.development", "./.env"] });

export const env = {
  backUrl: process.env.NEXT_PUBLIC_BACK_URL,
  MercadoPago: {
    MP_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN || "",
    MP_PUBLIC_KEY: process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || "",
  },
};
