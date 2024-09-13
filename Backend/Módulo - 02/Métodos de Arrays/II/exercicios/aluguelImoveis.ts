
type TImovel = {
  titulo: string;
  descricao: string;
  preco: number;
};
function solucao(anuncios: TImovel[], precoMaximo: number): TImovel[] | string {

  const anunciosFiltrados = anuncios.filter((anuncio) => {
    return anuncio.preco <= precoMaximo;
  });

  if (anunciosFiltrados.length > 0) {
    return anunciosFiltrados;
  } else {
    return "NAO ENCONTRADO";
  }

}

export default solucao;
