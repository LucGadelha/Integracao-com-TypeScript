import { Knex } from "knex";

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'sua_base_de_dados',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

export default knexConfig;
