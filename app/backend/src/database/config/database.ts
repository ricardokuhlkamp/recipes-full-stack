import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'TRYBE_RECIPES_APP_FULLSTACK',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: true,
};

export = config;
