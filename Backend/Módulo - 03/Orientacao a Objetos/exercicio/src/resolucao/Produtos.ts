export default class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Método para calcular o valor total em estoque
    valorTotalEstoque(): number {
        return this.preco * this.quantidade;
    }

    // Método para verificar se o produto está disponível
    estaDisponivel(): boolean {
        return this.quantidade > 0;
    }

    // Método para exibir os dados do produto
    exibirDados(): void {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade em estoque: ${this.quantidade}`);
    }
}
