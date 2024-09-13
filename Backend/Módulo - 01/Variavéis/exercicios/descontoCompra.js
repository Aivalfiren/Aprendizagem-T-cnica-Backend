function solucao(preco, valorDesconto) {

    const desconto = valorDesconto / 100;
    let precoFinal = preco - (preco * desconto);
    return precoFinal


}

module.exports = solucao;