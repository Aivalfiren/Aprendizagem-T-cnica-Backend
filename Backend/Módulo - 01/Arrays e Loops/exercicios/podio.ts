function solucao(rank: string[]): string {

  if(rank.length < 3){

  }

  const melhorLutador = rank[0];
  const segundoMelhor = rank[1];
  const terceiroMelhor = rank[2];

  const resultado = `${melhorLutador }, ${segundoMelhor }, ${terceiroMelhor }`

  return resultado;

}

export default solucao;
