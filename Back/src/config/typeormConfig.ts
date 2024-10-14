import { DataSource, DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import { env } from './envCon';




const config = {
  type: 'postgres',
  database: env.db.name,
  host: env.db.host,
  port: env.db.port,
  username: env.db.username,
  password: env.db.pass,
  
  //dropSchema: true,
  synchronize: true,
  // logging: true,
  // ssl: true,
  autoLoadEntities: true,
  timezone: 'localtime',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  // migrationsTableName: 'migrations_typeorm',
  // migrationsRun: true,
};
export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);
