// split -> converte uma string para um array contendo a string separada

const texto: string = 'Flavia Leite'
console.log(texto)

const arrayString = texto.split('') // cria um array onde cada caracter da string vira um item de array
const arrayString2 = texto.split(' ') // ao por espaço cria-se uma array com itens de cada palavra da string
const arrayString3 = texto.split('l') // ao por "l" cria-se uma array, que ao identificar a letra é excluida e criado um item separado

console.log(arrayString)
console.log(arrayString2)
console.log(arrayString3)