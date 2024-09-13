function solucao(numeroCadastrado: string): string {
  const numeroTelefone = numeroCadastrado.slice(0, 2).padEnd(numeroCadastrado.length - 2, '*');
  const resultado = numeroTelefone + numeroCadastrado.slice(-2);
  return resultado
}

export default solucao;
