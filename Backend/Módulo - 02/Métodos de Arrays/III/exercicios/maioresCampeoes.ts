type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  const timesFiltrados = times.filter((time) => {
    return time.pais === paisFiltrado;

  });

  timesFiltrados.sort((t1, t2) => {
    return t2.quantidadeTitulos - t1.quantidadeTitulos;
  });

  if (timesFiltrados.length === 0) {
    return 'NAO ENCONTRADO';
  } else {
    return timesFiltrados;
  }

}
export default solucao;
