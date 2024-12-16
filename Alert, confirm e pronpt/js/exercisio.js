let varA = 'A'
let varB = 'B'
let varC = 'C'

// Variavel varA = B  varB = C   varC = A
let reserva = varA
varA = varC
varB = varB
varC = reserva


console.log(varA, varB, varC)