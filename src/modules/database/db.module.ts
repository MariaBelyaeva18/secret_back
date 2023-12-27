import { Module } from '@nestjs/common';
import { Pool } from 'pg';

const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: String(process.env.POSTGRES_PASSWORD),
    port: Number(process.env.POSTGRES_PORT),
    // user: 'developer',
    // host: 'postgres',
    // database: 'postgres',
    // password: '123',
    // port: 5432,
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class PgModule {}
