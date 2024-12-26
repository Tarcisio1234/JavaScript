function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    

    const pessoas = []

    function recebeEventoForm(evento) {
        nomeGlobal = window.document.getElementById('nome1')
        sobrenomeGlobal = window.document.getElementById('sobrenome1')
        pesoGlobal = window.document.getElementById('peso1')
        alturaGlobal = window.document.getElementById('altura1')
        evento.preventDefault();
        const nome = form.querySelector('.hellobitch')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

            escrever(){
                nomeGlobal.innerHTML= this.nome
                sobrenomeGlobal.innerHTML= this.sobrenome
                pesoGlobal.innerHTML= this.peso
                alturaGlobal.innerHTML= this.altura
            }
        }
        pessoa.escrever()
        console.log(pessoas)
        return pessoas.push(pessoa)
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

