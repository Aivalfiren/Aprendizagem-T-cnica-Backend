// padStart -> completar o inicio da string com a correspondencia, de acordo com o tamanho definido 
// padEnd -> completar o fim da string com a correspondencia, de acordo com o tamanho definido

const texto: string = 'Flavia'
console.log(texto)

const textoFormatado = texto.padStart(20, '-')
const textoFormatado2 = texto.padEnd(20, '-')

console.log(textoFormatado)
console.log(textoFormatado2)

const finalCartão = '1234 5678 9899 0987'
const numeroFormatado = finalCartão.slice(-4).padStart(19, '**** ')
console.log(numeroFormatado)