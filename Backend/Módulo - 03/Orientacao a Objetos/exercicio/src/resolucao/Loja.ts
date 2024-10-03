export default class Loja {
    private nome: string;
    private endereco: string;

    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
    }

    // Método para exibir os dados da loja
    exibirDados(): void {
        console.log(`Loja: ${this.nome}, Endereço: ${this.endereco}`);
    }
}
