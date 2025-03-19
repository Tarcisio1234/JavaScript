document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formUsuario');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;

        const dadosUsuario = {
            nome: nome,
            idade: idade
        };
        try {
            const response = await fetch('http://localhost:4000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosUsuario)
            });

            if (response.ok) {
                alert('Usuário adicionado com sucesso!');
                form.reset();
            } else {
                alert('Erro ao adicionar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar dados para o servidor.');
        }
    });
});