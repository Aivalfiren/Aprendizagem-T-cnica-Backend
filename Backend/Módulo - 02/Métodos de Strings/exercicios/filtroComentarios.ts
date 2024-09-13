function solucao(comentario: string): boolean {
  const bloqueioCaracter = comentario.toUpperCase()
  if (bloqueioCaracter.includes('COVID') || bloqueioCaracter.includes('PANDEMIA')) {
    return false;
  } else {
    return true;
  }

}
export default solucao;
