// Implemente uma classe calculadora que contenha as seguintes funcionalidades:
// somar, subtrair, multiplicar e dividir

// A classe deverá receber em seu método construtor, dois argumentos numéricos que 
// serão manipulados por cada funcionalidade. Cada método devrá retornar o resultado 
// da operação entre os dois números.

// Não deverá ser possivél acessar os valores dos números informados no método construtor, 
// após a criação do objeto. Faça o teste com outros exemplos.


// COMO EU FIZ:
type TCalculadora = {
    somar: number
    subtrair: number
    multiplicar: number
    dividir: number
}

class Calculadora {
    private somar: number
    private subtrair: number
    private multiplicar: number
    private dividir: number

    constructor(calculo: TCalculadora) {
        this.somar = calculo.somar
        this.subtrair = calculo.subtrair
        this.multiplicar = calculo.multiplicar
        this.dividir = calculo.dividir
    }

    public calcularSoma(n1: number, n2: number): number {
        return this.somar = n1 + n2
    }

    public calcularSubtracao(n1: number, n2: number): number {
        return this.subtrair = n1 - n2
    }

    public calcularMultiplicacao(n1: number, n2: number): number {
        return this.multiplicar = n1 * n2
    }

    public calcularDivisao(n1: number, n2: number): number {
        return this.dividir = n1 / n2
    }

}

const calculadora = new Calculadora({
    somar: 10,
    subtrair: 5,
    multiplicar: 2,
    dividir: 2
})

console.log(calculadora.calcularSoma(10, 5))
console.log(calculadora.calcularSubtracao(10, 5))
console.log(calculadora.calcularMultiplicacao(10, 5))
console.log(calculadora.calcularDivisao(10, 5))



// CORREÇÃO - RESOLUÇÃO:
class Calculadora2 {
    private numero1: number
    private numero2: number

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    public somar(): number {
        return this.numero1 + this.numero2
    }

    public subtrair(): number {
        return this.numero1 - this.numero2
    }

    public multiplicar(): number {
        return this.numero1 * this.numero2
    }

    public dividir(): number {
        return this.numero1 / this.numero2
    }
}

const calculadora2 = new Calculadora2(10, 5)

console.log(calculadora2.somar())
console.log(calculadora2.subtrair())
console.log(calculadora2.multiplicar())
console.log(calculadora2.dividir())