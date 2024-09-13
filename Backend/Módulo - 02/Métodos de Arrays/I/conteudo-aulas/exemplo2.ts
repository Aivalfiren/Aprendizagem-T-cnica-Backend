// shift -> remove o primeiro elemento de um array e retorna esse elemento
// unshift -> adiciona um ou mais elementos no inicio do array e retorna o novo tamanho do array

const arrayPessoas = ['Flavia', 'João', 'Maria']
arrayPessoas.shift()
console.log(arrayPessoas)

//

const arrayPessoas1 = ['Flavia', 'João', 'Maria']
const ana = 'Ana'
const pedro = 'Pedro'

const tamanhoArray = arrayPessoas.unshift(ana, pedro)
console.log(arrayPessoas1)
console.log(tamanhoArray)