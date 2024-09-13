function solucao(pontucao: number, faseSeguinte: number): number {

  const fases = faseSeguinte - 1;
  const pontuacao = pontucao * fases;

  return pontuacao;

}

export default solucao;
