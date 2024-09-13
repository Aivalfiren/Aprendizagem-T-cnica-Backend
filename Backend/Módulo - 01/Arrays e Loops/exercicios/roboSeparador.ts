function solucao(frutaColetada: string, esteira: string[]): number {
  let quantidade = 0;
  for(let fruta of esteira){
    if(fruta === frutaColetada){
      quantidade++
    }
  }

  return quantidade;
}

export default solucao;
