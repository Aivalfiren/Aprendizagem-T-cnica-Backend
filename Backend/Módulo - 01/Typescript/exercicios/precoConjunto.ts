function solucao( precoPeca1: number, precoPeca2: number, precoPeca3: number, quantidade: number): number {

  const precoGasto = precoPeca1 + precoPeca2 + precoPeca3;
  const precoFinal = precoGasto * quantidade
  
  return precoFinal;



}

export default solucao;
