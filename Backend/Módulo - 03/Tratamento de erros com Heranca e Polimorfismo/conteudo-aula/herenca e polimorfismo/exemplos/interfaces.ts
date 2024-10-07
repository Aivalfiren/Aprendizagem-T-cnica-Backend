interface ICarro {                    // Interfaces -> é um tipo que contém propriedades e métodos exclusivo de um objeto, 
    marca: string                    // nela não pode ser atribuido valores, apenas o type de propriedades.
    modelo: string
    ano: number
    acelerar(): string
}

class Carro implements ICarro {            // implements -> garante que a classe implemente todos os metodos e propriedades da interface
    marca: string
    modelo: string
    ano: number

    velocidade: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

        this.velocidade = 0
    }

    acelerar(): string {
        return 'acelerando...'
    }
}

const uno: ICarro = new Carro('fiat', 'uno', 2000)

type IPessoa = {                                  // A diferença entre type e interface é que o type pode ser redeclarado
    nome: string
    email: string
}

const guido: IPessoa = {
    nome: 'Guido',
    email: 'guido@email.com'
}