// slice -> extrai a parte de uma string de acordo com seus indices

const texto: string = 'Flavia Leite'
console.log(texto)

const textoFormatado = texto.slice(3, -5)
const textoFormatado2 = texto.slice(-5, -3)
const textoFormatado3 = texto.slice(-4)

console.log(textoFormatado)
console.log(textoFormatado2)
console.log(textoFormatado3)