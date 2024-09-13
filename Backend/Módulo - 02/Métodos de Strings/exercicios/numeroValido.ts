function solucao(endereco: string): boolean {
  const listaDeInformacoesDoEndereco = endereco.split(",");
  const numero = listaDeInformacoesDoEndereco[1];
  const numeroFormatado = numero.trim();
  const numeroConvertido = Number(numeroFormatado);
  if (isNaN(numeroConvertido)) {
    return false;
  } else {
    return true;
  }
}

export default solucao;
