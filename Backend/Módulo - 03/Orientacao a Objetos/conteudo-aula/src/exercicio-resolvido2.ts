// Implemente uma classe Lampada que, ao ser instanciada, deverá receber a sua potência em Watts.
// A classe terá três funcionalidades.

// Ligar(altera o estado da lâmpada para true)
// Desligar(altera o estado da lâmpada para false)
// Medir Potência (retorna a potência da lâmpada em watts)

// Faça o tste com outros exemplos.

class Lampada {
    private potencia: number
    private estado: boolean

    constructor(watts: number) {
        this.potencia = watts
        this.estado = false
    }

    public ligar(): void {
        this.estado = true
    }

    public desligar(): void {
        this.estado = false
    }

    public medirPotencia(): number {
        return this.potencia
    }
}

const lampada = new Lampada(60)

console.log(lampada);
console.log(lampada.medirPotencia());
lampada.ligar();
console.log(lampada);
lampada.desligar();
console.log(lampada);
