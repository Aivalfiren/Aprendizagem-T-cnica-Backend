// map -> percorrer todos os elementos de uma array e retornar um novo array com os elementos modificados

// const pessoas = [
//     { nome: 'Flavia', sobrenome: 'Leite', idade: 24 },
//     { nome: 'João', sobrenome: 'Paulo', idade: 20 },
//     { nome: 'Ana', sobrenome: 'Maria', idade: 17 },
//     { nome: 'Maria', sobrenome: 'Julia', idade: 40 }
// ]

// const novoArray = pessoas.map(function (elemento) {
//     return {
//         nomeCompleto: `${elemento.nome} ${elemento.sobrenome}`,
//         idade: elemento.idade
//     }
// })

// console.log(novoArray)

const nomes = ['flavia', 'livia', 'sabrina', 'joão']

const arrayPessoas = nomes.map((nome) => {
    return {
        nome
    }
})

console.log(arrayPessoas)