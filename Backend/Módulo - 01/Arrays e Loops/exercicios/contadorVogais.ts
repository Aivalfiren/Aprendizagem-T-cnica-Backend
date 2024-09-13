function solucao(palavra: string): boolean {
  let leitura: boolean = false
  for (let letra of palavra){
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
      leitura = true
    }
  }
  if (leitura){
    return true;
  } else {
    return false
 }

}

export default solucao;
