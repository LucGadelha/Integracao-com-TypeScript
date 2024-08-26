import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("aluno", (table) => {
    table.bigIncrements("id").primary();
    table.string("nome").notNullable();
    table.string("cpf").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("aluno");
}
