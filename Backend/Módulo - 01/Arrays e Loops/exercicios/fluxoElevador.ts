function solucao(botoesApertados: string[]): string {
  let botaoA1 = 0
  let botaoA2 = 0
  for (let botoes of botoesApertados){
    if(botoes === 'A1'){
      botaoA1++;
    } else if (botoes === 'A2'){
      botaoA2++;
    }
  }

  if (botaoA1 > botaoA2){
    return 'NERD';
  } else if (botaoA2 > botaoA1){
    return 'ATLETA';
  } else{
    return 'DIVERSIFICADO';
  }

}

export default solucao;
