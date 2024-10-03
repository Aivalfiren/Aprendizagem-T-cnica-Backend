import Loja from './resolucao/Loja'
import ContaBancaria from './resolucao/ContaBancaria';
import Produto from './resolucao/Produtos';
import ModificacaoDaLoja from './resolucao/ModificacaoDaLoja';

// Testand Loja (Questão 1)
const minhaLoja = new Loja('Loja Exemplo', 'Rua dos Exemplos, 123');
minhaLoja.exibirDados();

// Testando ContaBancaria (Questão 2)
const minhaConta = new ContaBancaria('12345-6', 'João');
minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.exibirSaldo();

// Testando Produto (Questão 3)
const produto1 = new Produto('Produto A', 10, 5);
const produto2 = new Produto('Produto B', 20, 0);
produto1.exibirDados();
console.log(`Disponível: ${produto1.estaDisponivel()}`);
produto2.exibirDados();
console.log(`Disponível: ${produto2.estaDisponivel()}`);

// Testando ModificacaoDaLoja (Questão 4)
const lojaModificada = new ModificacaoDaLoja('Loja Modificada', 'Avenida Teste, 456');
lojaModificada.adicionarProduto(produto1);
lojaModificada.adicionarProduto(produto2);
lojaModificada.exibirDados();
console.log(`Valor total em estoque: R$${lojaModificada.valorTotalEstoque()}`);
