function solucao( nomePersonagem: string, classe: string, pontuacao: number): string {

  let dadosDoPersonagem = `OLÁ, ${nomePersonagem}. VOCÊ É UM ${classe} COM PONTUAÇÃO ATUAL DE ${pontuacao}`;
  return dadosDoPersonagem;
}

export default solucao;
