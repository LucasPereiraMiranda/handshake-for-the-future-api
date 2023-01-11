import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: Number(process.env.TYPEORM_PORT || 5432),
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'password',
  database: process.env.TYPEORM_DATABASE || 'handshake_for_the_future_db',
  synchronize: false,
  migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
  migrationsRun: !!process.env.TYPEORM_MIGRATIONS_RUN || true,
  migrationsTableName: 'migrations',
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
});
