type TCarro = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia?: number
}

class Carro {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia: number

    ligado: boolean
    acelerado: number

    constructor(carro: TCarro) {
        this.cor = carro.cor;              // "this" significa que estamos acessando uma propriedade da classe "Carro"
        this.marca = carro.marca;
        this.modelo = carro.modelo;
        this.ano = carro.ano;
        this.potencia = carro.potencia ?? 90;
        this.ligado = false;
        this.acelerado = 0;
    }

    ligarOuDesligar(): void {
        this.ligado = !this.ligado;
    }

    acelerar(rpm: number): void {
        this.acelerado += rpm;   // "+=" significa que estamos acrecentando
    }

    estadoDoCarro(): string {
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado';
    }

}

const novoCarro = {
    cor: 'Preto',
    ano: 1970,
    marca: 'Volkswagen',
    modelo: 'Fusca',
    potencia: 120
}

const fusca = new Carro(novoCarro);

console.log(fusca);


