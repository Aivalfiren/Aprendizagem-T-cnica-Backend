function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {

  if (cpfsCadastrados.includes(cpfDigitado)) {
    return 'CPF JA CADASTRADO';
  }

  return 'CADASTRO REALIZADO COM SUCESSO';

}
export default solucao;
