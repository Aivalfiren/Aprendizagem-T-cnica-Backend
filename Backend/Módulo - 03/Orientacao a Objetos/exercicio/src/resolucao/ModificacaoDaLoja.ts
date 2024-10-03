import Produto from './Produtos';

export default class ModificacaoDaLoja {
    private nome: string;
    private endereco: string;
    private produtos: Produto[] = [];

    constructor(nome: string, endereco: string) {
        this.nome = nome;
        this.endereco = endereco;
    }

    // Método para adicionar produto à loja
    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    // Método para calcular o valor total em estoque da loja
    valorTotalEstoque(): number {
        return this.produtos.reduce((total, produto) => total + produto.valorTotalEstoque(), 0);
    }

    // Método para exibir os dados da loja
    exibirDados(): void {
        console.log(`Loja: ${this.nome}, Endereço: ${this.endereco}`);
        console.log('Produtos:');
        this.produtos.forEach(produto => produto.exibirDados());
    }
}

