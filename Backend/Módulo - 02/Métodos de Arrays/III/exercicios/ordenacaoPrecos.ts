type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {

  const ordemPrecos = precos.sort((preco1, preco2) => {
    return preco1 - preco2
  })
  if (filtroPreco === "crescente") {
    return ordemPrecos
  } else {
    return ordemPrecos.reverse()
  }

}

export default solucao;
