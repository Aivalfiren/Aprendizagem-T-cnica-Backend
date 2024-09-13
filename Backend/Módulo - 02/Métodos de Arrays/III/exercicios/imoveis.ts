type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  const anunciosOrdenados = anuncios.sort((a1, a2) => {
    return a1.preco - a2.preco;
  })

  if (anuncios.length === 0) {
    return 'NAO ENCONTRADO';
  } else {
    return anunciosOrdenados;
  }
}

export default solucao;
