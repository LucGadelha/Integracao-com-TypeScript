import express, { Request, Response } from 'express';

const router = express.Router();

interface Aluno {
    id: number;
    nome: string;
    cpf: string;
}

let alunos: Aluno[] = []; // Simula um banco de dados

router.post('/aluno', (req: Request, res: Response) => {
    const { nome, cpf } = req.body;
    const id = alunos.length + 1;
    alunos.push({ id, nome, cpf });
    res.status(201).json({ id });
});

router.get('/aluno', (req: Request, res: Response) => {
    res.json(alunos);
});

export default router;
