// splice -> alterar um array removendo e/ou adicionando outros elementos

const paises = ['Brasil', 'Canada', 'Mexico', 'Chile', 'França']
console.log(paises.splice(0, 1)) // primeiro indicar o inicio do indice e depois até onde excluir
console.log(paises.splice(0, 2, 'Japão')) // exlui e adiciona japão após indice 0
console.log(paises.splice(1, 3, 'Japão', 'China'))
console.log(paises.splice(2, 0, 'Japão', 'China')) // adiciona os paises após o indice 2 e mantém os demais
console.log(paises)