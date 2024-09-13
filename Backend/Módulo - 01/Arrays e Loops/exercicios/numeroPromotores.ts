function solucao(notas: number[]): number {
  let promotores = 0;
  for (let nota of notas) {
    if (nota === 9 || nota === 10) {
      promotores++;
    }
  }
  return promotores;
}

export default solucao;
