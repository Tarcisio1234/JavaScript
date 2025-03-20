// Função para buscar e exibir os dados
async function buscarUsuarios() {
    try {
        const response = await fetch('http://localhost:4000/buscar');
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }

        const usuarios = await response.json();
        const tbody = document.querySelector('#tabelaUsuarios tbody');
        tbody.innerHTML = '';

        usuarios.forEach(usuario => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.idade}</td>
                <td>
                    <button onclick="abrirFormularioEdicao('${usuario.id}', '${usuario.nome}', '${usuario.idade}')">Editar</button>
                    <button onclick="excluirUsuario('${usuario.id}')">Deletar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao carregar os dados.');
    }
}

// Função para abrir o formulário de edição
function abrirFormularioEdicao(id, nome, idade) {
    document.getElementById('idUsuario').value = id;
    document.getElementById('nomeEditar').value = nome;
    document.getElementById('idadeEditar').value = idade;
    document.getElementById('formEdicao').style.display = 'block';
}

// Função para fechar o formulário de edição
function fecharFormulario() {
    document.getElementById('formEdicao').style.display = 'none';
}

async function excluirUsuario(id) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
        try {
            const response = await fetch(`http://localhost:4000/excluir/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id }) 
            });

            if (!response.ok) { 
                throw new Error('Erro ao excluir usuário.');
            }

            alert('Usuário excluído com sucesso!');
            buscarUsuarios();
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao excluir usuário.');
        }
    } else {
        alert("Operação cancelada");
    }
}

// Função para enviar os dados editados
document.getElementById('formEditarUsuario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('idUsuario').value;
    const nome = document.getElementById('nomeEditar').value;
    const idade = document.getElementById('idadeEditar').value;

    try {
        const response = await fetch(`http://localhost:4000/editar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, idade })
        });

        if (response.ok) {
            alert('Usuário atualizado com sucesso!');
            fecharFormulario();
            buscarUsuarios(); // Atualiza a tabela
        } else {
            alert('Erro ao atualizar usuário.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar dados para o servidor.');
    }
});

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', buscarUsuarios);