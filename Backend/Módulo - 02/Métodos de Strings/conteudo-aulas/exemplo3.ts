// substring -> retorna a parte de uma string a partir do indice inicial e final (opcional)

const texto = 'Flavia Leite'
console.log(texto)

const parteDaString = texto.trim().substring(6, 11) // ao juntar dois metodos, estou primeiro tirando o espaços da string e depois pedaços delas conforme numero de indice
const parteDaString2 = texto.substring(texto.length - 5) // o lenght conta is indices e ao subtrair, retorna o que sobra
const parteDaString3 = texto.substring(15)

console.log(parteDaString)
console.log(parteDaString2)
console.log(parteDaString3)