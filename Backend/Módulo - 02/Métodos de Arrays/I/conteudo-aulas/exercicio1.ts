// Crie um array com 5 nomes de paises, adicione um pais ao fim da lista, imprima a lista na tela
// Remova um pais do fim da lista, imprima a lista na tela
// Adcione um pais no inicio da lista, imprima a lista na tela
// Remova um pais do inicio da lista, imprima a lista na tela
// imprima o ultimo pais da lista na tela
// imprima o pais de indice 2 na tela
// imprima o segundo pais de indice 2 na tela

const paises = ['Brasil', 'Canada', 'Mexico', 'Chile', 'França']
paises.push('Paraguai')
console.log(paises)

paises.pop()
console.log(paises)

paises.unshift('Belgica')
console.log(paises)

paises.shift()
console.log(paises)

console.log(paises[paises.length - 1])
console.log(paises[1])
console.log(paises[2])