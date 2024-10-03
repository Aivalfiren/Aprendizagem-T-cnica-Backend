export default class ContaBancaria {
    private numeroConta: string;
    private titular: string;
    private saldo: number;

    constructor(numeroConta: string, titular: string, saldoInicial: number = 0) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Método para depositar na conta
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`);
        }
    }

    // Método para sacar da conta
    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para saque de R$${valor}. Saldo atual: R$${this.saldo}`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`);
        }
    }

    // Método para exibir o saldo atual
    exibirSaldo(): void {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

