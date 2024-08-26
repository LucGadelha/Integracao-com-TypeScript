import knex, { Knex } from "knex";
import knexConfig from "./knex";

let client: Knex;

const connect = (): Knex => {
  if (!client) {
    client = knex(knexConfig);
  }

  return client;
};

export default connect;
