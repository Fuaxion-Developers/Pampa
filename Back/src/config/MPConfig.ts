import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';
import { env } from './envCon';

const client = new MercadoPagoConfig({
  accessToken: env.MP.MP_ACCESS_TOKEN,
  options: { timeout: 10000 },
});

const preference = new Preference(client);
const payment = new Payment(client);

export { preference, payment };
