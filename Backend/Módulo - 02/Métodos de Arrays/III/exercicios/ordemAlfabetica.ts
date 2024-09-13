function solucao(listaAlunos: string[], ordemAlfabetica: boolean): string[] {

  if (ordemAlfabetica) {
    return listaAlunos.slice().sort();
  } else {
    return listaAlunos;
  }


}
export default solucao;
