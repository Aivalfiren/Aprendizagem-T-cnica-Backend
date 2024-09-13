function solucao(notas: number[]): number {
  let total = notas.length;
  let promotores = 0;
  let detratores = 0;

  for (let nota of notas){
    if(nota >= 9 && nota <= 10){
      promotores++;
    } else if (nota >= 0 && nota <= 6){
      detratores++;
    }
  }
  const nps = (promotores - detratores) / total;
  return nps * 100;

}

export default solucao;
