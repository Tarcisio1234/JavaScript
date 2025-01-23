// Bugs encontrados: não reconhecer números decimais com "," 

function Inicio() {

    let formulario = document.querySelector('.form');
    function CalcularImc() {
        event.preventDefault(); //inpede que o site recarrege
        let peso = window.document.getElementById('peso').value
        let altura = window.document.getElementById('altura').value
        if (isNaN(peso) || isNaN(altura)) {
            alert("Digite apenas números")
        }
        else {
            let imc = altura * altura
            let novoimc = peso / imc
            ResultadoImg(novoimc)
        }

        function ResultadoImg(novoimc) {

            let localResultado = window.document.getElementById('resultado')
            if (novoimc <= 18.5) {
                return localResultado.innerHTML = "Você está abaixo do peso"
            }
            else if (novoimc > 18.6 && novoimc < 24.9) {
                return localResultado.innerHTML = "O seu peso esta normal"
            }
            else if (novoimc >= 25 && novoimc <= 29.9) {
                return localResultado.innerHTML = "Você está acima do peso"
                CalculandoPesoIdeal()
            }
            else if (novoimc >= 30 && novoimc <= 34.9) {
                return localResultado.innerHTML = "Você está com obesidade nivel 1"
                CalculandoPesoIdeal()
            }
            else if (novoimc >= 35 && novoimc <= 39.9) {
                return localResultado.innerHTML = "Você está com obesidade nivel 2"
                CalculandoPesoIdeal()
            }
            else {
                return localResultado.innerHTML = "Você está com obesidade nivel 3"
                CalculandoPesoIdeal()
            }

            function CalculandoPesoIdeal(){
            
            }
        }
    }

    formulario.addEventListener('submit', CalcularImc);
}



Inicio()