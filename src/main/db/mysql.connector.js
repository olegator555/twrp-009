import pgPromise from 'pg-promise';

const connection = {
  host: 'localhost', // server name or IP address;
  port: 5432,
  database: 'main',
  user: 'postgres',
  password: '123456',
};

const pgp = pgPromise({});
export const db = pgp(connection);
