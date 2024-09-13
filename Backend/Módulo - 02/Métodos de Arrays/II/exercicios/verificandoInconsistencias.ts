function solucao(cpfsCadastrados: string[]): string {

  const validarCPF = cpfsCadastrados.every((cpf) => {
    return cpf.length === 11;
  })

  if (validarCPF) {
    return 'PLANILHA VALIDA'
  } else {
    return 'PLANILHA INVALIDA'
  }
}

export default solucao;
