type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): string {
  const media1 = (filme1.notas[0] + filme1.notas[1]) / 2;
  const media2 = (filme2.notas[0] + filme2.notas[1]) / 2;

  if (media1 > media2){
    return filme1.nome
  } else if (media2 > media1){
    return filme2.nome
  } else {
    return 'EMPATE'
  }


}

export default solucao;
