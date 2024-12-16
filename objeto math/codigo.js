const num = Number(prompt("Digite um número: "))
const numeroTitulo = window.document.getElementById('idNumero')

const raiz = Math. sqrt(num)
const inteiro = Number.isInteger(num)
const nan = isNaN(num)
const menorAredondado = Math.floor(num)
const maiorAredondado = Math.ceil(num)

numeroTitulo.innerHTML = num
window.document.getElementById('idRaiz').innerHTML =raiz
window.document.getElementById('idVerificar').innerHTML = inteiro
window.document.getElementById('idIntero').innerHTML = nan
window.document.getElementById('idArredondadoBaixo').innerHTML = menorAredondado
window.document.getElementById('idArredondadoCima').innerHTML = maiorAredondado
window.document.getElementById('idCasasDecimais').innerHTML = num.toFixed(2)