function solucao(quantidadeCriancas: number, quantidadePreAdolescentes: number, quantidadeTotal: number): number {

  let carneCriancas = 100;
  let carnePreAdolescentes = 200;
  let carneAdultos = 300;

  const quantidadeAdultos = quantidadeTotal - quantidadeCriancas - quantidadePreAdolescentes;
  const somaTotalcarne = quantidadeCriancas * carneCriancas + quantidadePreAdolescentes * carnePreAdolescentes + quantidadeAdultos * carneAdultos;
  

  return somaTotalcarne;


}

export default solucao;
