export default function solucao(marcacaoRoleta: number, quantidadeCaixa: number, precoPassagem: number): string {
  
  const valorEsperado = marcacaoRoleta * precoPassagem;
  const diferenca = quantidadeCaixa - valorEsperado;

  if (diferenca === 0){
    return 'TUDO CERTO';

  } else if (diferenca > 0){
    return 'DINHEIRO SOBRANDO';

  } else {
    return 'DINHEIRO FALTANDO';
  }

}
