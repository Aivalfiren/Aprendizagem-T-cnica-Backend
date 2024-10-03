type TCarro = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia?: number
}

// Abstração
class Carro {
    public cor: string                     // "public" significa que a propriedade pode ser acessada de fora
    private marca: string                  // "private" significa que a propriedade so pode ser acessada dentro da propria classe
    private modelo: string                 // "private" e "public" é o Encapsulamento
    private ano: number
    private potencia: number

    private ligado: boolean
    private acelerado: number

    constructor(carro: TCarro) {
        this.cor = carro.cor;              // "this" significa que estamos acessando uma propriedade da classe "Carro"
        this.marca = carro.marca;
        this.modelo = carro.modelo;
        this.ano = carro.ano;
        this.potencia = carro.potencia ?? 90;
        this.ligado = false;
        this.acelerado = 0;
    }

    public ligarOuDesligar(): void {
        if (this.ligado) {
            this.desacelerar()
            this.ligado = false
        } else {
            this.ligado = true
        }
    }

    public acelerar(rpm: number): void {
        this.acelerado += rpm;   // "+=" significa que estamos acrecentando
    }

    public estadoDoCarro(): string {
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado';
    }

    public turboCarro(cv: number): void {
        this.potencia += cv
    }

    private desacelerar() {
        this.acelerado = 0
    }


}