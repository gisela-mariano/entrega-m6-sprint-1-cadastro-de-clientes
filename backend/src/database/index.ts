import { DataSource } from 'typeorm';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.PORT!),

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,

  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source Iniciado');
  })
  .catch((err) => {
    console.log('Erro durante a inicialização do Data Source', err);
  });
