function solucao(tipoItensCarrinho: string[], idadeCliente: number): string {

  const verificarIdade = tipoItensCarrinho.some((item) => {
    return item === 'bebida com alcool'
  })

  if (idadeCliente < 18 && verificarIdade) {
    return 'COMPRA BLOQUEADA'
  } else {
    return 'COMPRA EFETUADA'
  }

}
export default solucao;
