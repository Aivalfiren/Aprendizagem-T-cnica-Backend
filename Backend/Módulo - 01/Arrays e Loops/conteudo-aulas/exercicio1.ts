//Crie um array com 5 nomes de países
//adicione um pais no fim da lista
//imprima a lista na tela
//altere o quinto pais da lista para um novo pais
//imprima a lista na tela
//imprima o ultimo pais da lista na tela
//imprima o segundo pais da lista na tela
//imprima o pais de indice 2 na tela 


const paises = ['Brasil', 'Canadá', 'Chile', 'Egito', 'Itália']

paises[paises.length] = 'Espanha'
console.log(paises)

paises[4] = 'China'
console.log(paises)

console.log(paises[paises.length - 1])
console.log(paises[1])
console.log(paises[2])