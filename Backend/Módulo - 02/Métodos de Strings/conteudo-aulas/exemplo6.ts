// replace -> substitui a primeira correspondecia de uma string por outra
// replaceALL -> substitui todas correpondencias de uma string por outra

const texto: string = 'Eu adoro a Cubos Academy e adoro as aulas de lógica'
console.log(texto)

const textoSubstituido = texto.replace('adoro', 'amo')
const textoSubstituido2 = texto.replaceAll('adoro', 'amo')// só existe a partir do ES2022

console.log(textoSubstituido)
console.log(textoSubstituido2)
