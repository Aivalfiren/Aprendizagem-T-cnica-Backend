// Crie um objeto que representará uma calculadora.
// O objeto deve conter quatro métodos que realizará as quatros operações matematicas: soma, subtração, multiplicação e divisão

// Cada membro deverá retornar o resultado da operação;
// Implemente os métodos com suas respectivas tipagens de parâmetros e retorno.

type TTipoFuncao = (numero1: number, numero2: number) => number
type TCalculadora = {
    soma: TTipoFuncao
    subtracao: TTipoFuncao
    multiplicacao: TTipoFuncao
    divisao: TTipoFuncao
}

const calculadora: TCalculadora = {
    soma: function (numero1: number, numero2: number): number {
        return numero1 + numero2
    },
    subtracao: function (numero1: number, numero2: number): number {
        return numero1 - numero2
    },
    multiplicacao: function (numero1: number, numero2: number): number {
        return numero1 * numero2
    },
    divisao: function (numero1: number, numero2: number): number {
        return numero1 / numero2
    }

}

console.log(calculadora.soma(5, 9));
console.log(calculadora.subtracao(6, 87));
console.log(calculadora.multiplicacao(23, 689));
console.log(calculadora.divisao(4, 5));