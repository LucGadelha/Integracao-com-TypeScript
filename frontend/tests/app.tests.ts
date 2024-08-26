import request from 'supertest';
import app from '../src/app';

describe('Aluno API', () => {
    it('should create a new aluno', async () => {
        const response = await request(app)
            .post('/aluno')
            .send({ nome: 'João', cpf: '12345678900' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should get all alunos', async () => {
        const response = await request(app).get('/aluno');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
