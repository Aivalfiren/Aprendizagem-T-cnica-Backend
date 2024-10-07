class ContaBancaria {
    saldo: number

    constructor() {
        this.saldo = 0
    }

    depositar(valor: number) {
        this.saldo += valor
    }

    sacar(valor: number) {
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria {
    sacar(valor: number): void {
        this.saldo -= (valor + 100)   // ao sacar, adiciona uma taxa de 100 em cima do valor sacado. 
    }
}

class ContaPoupanca extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo += (valor + 200)   // ao depositar, adiciona uma taxa que seria o rendimento de 200 em cima do valor depositado.
    }
}

const contaCorrente = new ContaCorrente()
const contaPoupanca = new ContaPoupanca()

contaCorrente.depositar(1000)
contaCorrente.depositar(1000)
contaPoupanca.depositar(1000)
contaPoupanca.depositar(1000)
contaCorrente.sacar(500)
contaPoupanca.sacar(500)

console.log(contaPoupanca, contaCorrente) 