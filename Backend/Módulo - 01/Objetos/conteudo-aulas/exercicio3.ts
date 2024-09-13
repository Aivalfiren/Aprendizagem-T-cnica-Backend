//Crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
// Nome do cliente
// Idade do cliente
// Produtos consumidos
// Cada produto pode ter:
// nome do produto
// preço unitário (em centavos)
// quantidade comprada

//Pode iventar os dados. Coloque pelo menos 3 produtos.
type TProdutosConsumidos = {
    nomeProduto: string
    precoUnitario: number
    quantidadeComprada: number

}
type TDadosCliente = {
    nome: string
    idade: number
    produtosConsumidos: TProdutosConsumidos[]
}

const dadosCliente: TDadosCliente = {
    nome: 'Flavia',
    idade: 24,
    produtosConsumidos:[
        {
            nomeProduto:'Chocolate',
            precoUnitario: 4999, 
            quantidadeComprada: 2,
         }, 
        {
            nomeProduto:'Café',
            precoUnitario: 673838, 
            quantidadeComprada: 1,
        },
        {
             nomeProduto:'leite',
             precoUnitario: 746946, 
             quantidadeComprada: 4,
        }
    ]
}

// console.log(dadosCliente)

// Faça um programa que imprime uma mensagem amigável do resumo do cartão de consumo
// (que inclui chamar o cliente pelo nome) que informa o valor que ele deve pagar.

let total = 0

for (let produto of dadosCliente.produtosConsumidos){
    total += produto.precoUnitario * produto.quantidadeComprada
}
console.log(`O total da compra do cliente ${dadosCliente.nome} foi de ${total/100}`);