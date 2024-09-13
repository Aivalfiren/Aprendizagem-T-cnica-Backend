// findIndex -> busca um elemento em um array e retorna o índice do elemnto, caso exista, ou retorna -1 caso o elemento não exista.

// const pessoas = [
//     { nome: 'Flavia', idade: 24 },
//     { nome: 'João', idade: 20 },
//     { nome: 'Ana', idade: 17 }
// ]

// const pessoaEncontrada = pessoas.findIndex((pessoa) => {
//     return pessoa.nome === 'João'
// })
// console.log(pessoaEncontrada)

const numeros = [1, 23, 5, 89, 56, 100]

const resposta = numeros.findIndex(function (numero) {
    return numero === 89
})
console.log(resposta)