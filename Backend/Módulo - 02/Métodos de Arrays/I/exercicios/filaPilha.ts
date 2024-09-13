type TPedido = {
  nomeCliente: string;
  nomePrato: string;
  quantidade: number;
};

type TAtendimento = "fila" | "pilha";

function solucao(pedidoSolicitado: TPedido, pedidos: TPedido[], tipoDeAtendimento: TAtendimento): TPedido[] {

  if (tipoDeAtendimento === "fila") {
    pedidos.push(pedidoSolicitado);
    return pedidos;
  } else {
    pedidos.unshift(pedidoSolicitado);
    return pedidos;
  }
}


export default solucao;
