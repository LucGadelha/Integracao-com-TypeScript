import axios from 'axios';

interface Aluno {
    nome: string;
    cpf: string;
}

document.getElementById('alunoForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;

    try {
        const response = await axios.post('/aluno', { nome, cpf });
        const result = response.data;
        (document.getElementById('result') as HTMLDivElement).textContent = `Aluno cadastrado com ID: ${result.id}`;
    } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
    }
});
