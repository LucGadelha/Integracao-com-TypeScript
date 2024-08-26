// knex.ts
import knex, { Knex } from "knex";
import knexConfig from "./knexConfig"; // Aqui você importa corretamente de outro arquivo

let client: Knex;

const connect = (): Knex => {
  if (!client) {
    client = knex(knexConfig);
  }
  return client;
};

export default connect;
