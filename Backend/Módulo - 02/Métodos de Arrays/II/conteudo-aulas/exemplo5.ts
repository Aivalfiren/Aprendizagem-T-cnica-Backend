// find -> busca um elemento em um array e retorna o elemento, caso exista

// const pessoas = [
//     { nome: 'Flavia', idade: 24 },
//     { nome: 'João', idade: 20 },
//     { nome: 'Ana', idade: 17 }
// ]

// const pessoaEncontrada = pessoas.find((pessoa) => {
//     return pessoa.nome === 'Maria'
// })
// console.log(pessoaEncontrada)

const numeros = [1, 23, 5, 89, 56, 100]

const resposta = numeros.find(function (numero) {
    return numero === 89
})
console.log(resposta)