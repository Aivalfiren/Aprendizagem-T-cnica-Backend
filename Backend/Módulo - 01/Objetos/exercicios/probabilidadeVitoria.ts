type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {
  const { probabilidades } = dados;
  if (probabilidades.length === 0) {
    return 'DADOS INSUFICIENTES';
  }

  let soma = 0;
  for (let i = 0; i < probabilidades.length; i++) {
    soma += probabilidades[i];
  }

  const media = soma / probabilidades.length;
  return media;
}

export default solucao;
