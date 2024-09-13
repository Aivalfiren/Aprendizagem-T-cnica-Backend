function solucao(comprimento, largura, rendimento) {

    const area = comprimento * largura;
    const quantidadeTinta = area * rendimento;

    return quantidadeTinta;

}

module.exports = solucao;