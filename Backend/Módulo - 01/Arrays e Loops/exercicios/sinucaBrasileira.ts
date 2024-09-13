function solucao(jogadorA: number[]): string {
  let calculoA = 0;
  for (let numero of jogadorA) {
    calculoA += numero; // o mesmo de: calculoA = calculoA + numero. O sinal += quer dizer que o calculoA é igual a ele mesmo + a variavel do for, se não iusar o 
    // + na frente do =, estarei apenas atualizando a variavel calculoA (por isso que nessas questões é indicado usar o let, pois const não pode ser atualizada.)
  }

  const calculoB = 120 - calculoA;
  if (calculoA > 60) {
    return 'JOGADOR A GANHOU';
  } else if (calculoB > 60) {
    return 'JOGADOR B GANHOU';
  } else {
    return 'EMPATE'
  }

}

export default solucao;
