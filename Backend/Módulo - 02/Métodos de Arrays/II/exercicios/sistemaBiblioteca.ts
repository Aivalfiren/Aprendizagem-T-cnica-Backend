function solucao(livros: string[], livroProcurado: string): string {

  const encontrarPosicao = livros.findIndex((livro) => {
    return livro === livroProcurado;
  })

  if (encontrarPosicao === - 1) {
    return 'NENHUM LIVRO ENCONTRADO';
  } else {
    return `O LIVRO ESTA NA POSICAO ${encontrarPosicao + 1}`;
  }

}

export default solucao;
