// Função em propriedade de objetos (métodos)

// function soma(numero1: number, numero2: number): number {
//     return numero1 + numero2
// }
// const funcaoNaVariavel = soma
// console.log(funcaoNaVariavel(3, 5));

type TPessoa = {
    nome: string
    sobrenome: string
    nomeCompleto: () => void
}
type TPessoa2 = {
    nome: string
    sobrenome: string
    nomeCompleto: (idade: number) => void
}

const pessoa: TPessoa = {
    nome: 'Flavia',
    sobrenome: 'Leite',
    nomeCompleto: function () {
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
    }
}

const pessoa2: TPessoa2 = {
    nome: 'Livia',
    sobrenome: 'Leite',
    nomeCompleto: function (idade: number) { // se tiver um parametro:
        console.log(`${this.nome} ${this.sobrenome}, ${idade} anos`) // só uso o this quando eu quiser pegar alguma propriedade dentro do objeto.
    }
}

pessoa2.nomeCompleto(11)