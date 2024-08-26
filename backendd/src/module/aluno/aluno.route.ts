import express from 'express';
import { getAllAlunos, createAluno } from './aluno.model';

const router = express.Router();

router.get('/', async (req, res) => {
  const alunos = await getAllAlunos();
  res.json(alunos);
});

router.post('/', async (req, res) => {
  const novoAluno = req.body;
  const [id] = await createAluno(novoAluno);
  res.status(201).json({ id });
});

export default router;
