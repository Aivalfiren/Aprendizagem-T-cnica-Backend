type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {
   let lojaBarata = produtosEncontrados[0].loja;
   let precoBarato = produtosEncontrados[0].preco;

   for (let produtos of produtosEncontrados){
    if (produtos.preco < precoBarato){
        precoBarato = produtos.preco;
        lojaBarata = produtos.loja;
    }
   }
   return lojaBarata;
  
}

export default solucao;
