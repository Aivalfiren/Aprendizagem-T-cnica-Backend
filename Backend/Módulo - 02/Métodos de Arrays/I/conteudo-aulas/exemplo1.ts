// push -> adiciona um ou mais elementos no array e retorna o tamanho do array atual
// pop -> remove o ultimo elemento do array e retorna o elemento que foi removido

const arrayNumeros = [12, 1, 45, 76, 100]
// console.log(arrayNumeros.length)

const tamanhoArray = arrayNumeros.push(134, 20, 50)
console.log(arrayNumeros)
console.log(tamanhoArray)

//

const elementoRemovido = arrayNumeros.pop() // não preciso preencher nada, deixando vazio já remove
console.log(elementoRemovido)