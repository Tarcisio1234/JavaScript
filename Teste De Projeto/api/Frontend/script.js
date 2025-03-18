document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formUsuario');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;

        // Cria um objeto JSON com os dados
        const dadosUsuario = {
            nome: nome,
            idade: idade
        };

        try {
            // Envia os dados para a rota /create
            const response = await fetch('http://localhost:4000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosUsuario) // Converte o objeto para JSON
            });

            if (response.ok) {
                alert('Usuário adicionado com sucesso!');
                form.reset(); // Limpa o formulário
            } else {
                alert('Erro ao adicionar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar dados para o servidor.');
        }
    });
});