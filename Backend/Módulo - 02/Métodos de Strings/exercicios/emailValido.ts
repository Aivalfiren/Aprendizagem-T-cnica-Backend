function solucao(email: string): string {
  const encontrarCaracter = email.includes('@')
  if (encontrarCaracter) {
    return 'VALIDO'
  } else {
    return 'INVALIDO'
  }

}
export default solucao;
