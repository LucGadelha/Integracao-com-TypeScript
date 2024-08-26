import knex from '../../config/knex';

interface Aluno {
  id: number;
  nome: string;
  cpf: string;
}

const getAllAlunos = async (): Promise<Aluno[]> => {
  // Uso correto da instância de conexão com o banco de dados
  return knex<Aluno>('alunos').select();
};

const createAluno = async (aluno: Aluno): Promise<number[]> => {
  // Uso correto da instância de conexão com o banco de dados
  return knex<Aluno>('alunos').insert(aluno).returning('id');
};

export { getAllAlunos, createAluno };
