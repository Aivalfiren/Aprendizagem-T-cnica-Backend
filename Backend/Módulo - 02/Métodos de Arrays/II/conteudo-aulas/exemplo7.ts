// filter -> filtra e retorna um novo array com todos os elementos que passam pelo teste.

// const nomes = ['flavia', 'livia', 'sabrina', 'joão']

// const novoArrayNomes = nomes.filter((nome) => {
//     return nome.length < 2
// })

// console.log(novoArrayNomes)

type TPessoa = {
    nome: string
    idade: number
}

const pessoas = [
    { nome: 'Flavia', idade: 24 },
    { nome: 'João', idade: 20 },
    { nome: 'Ana', idade: 17 }
]

function encontrarMenorIdade(pessoas: TPessoa) {
    return pessoas.idade > 17;
}

const maioresIdade = pessoas.filter(encontrarMenorIdade)
console.log(maioresIdade)