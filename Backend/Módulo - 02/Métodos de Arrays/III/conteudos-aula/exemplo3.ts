// localeCompare -> método de cmparação de strings

const letra1 = 'a'
const letra2 = 'b'

console.log(letra1.localeCompare(letra2))

// ordem crescente
const usuarios = ['João', 'Maria', 'ana', 'rodrigo', 'Rodrigo']
usuarios.sort((item1, item2) => {
    return item1.localeCompare(item2)
})
console.log(usuarios)

// ordem decrescente
usuarios.sort((item1, item2) => {
    return item2.localeCompare(item1)
})
console.log(usuarios)

/////////////////////////////////////////////////////////   
const usuarios2 = [
    { nome: 'João', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 },
    { nome: 'Rodrigo', idade: 18 }
];

//ordem crescente
usuarios2.sort((item1, item2) => {
    return item1.nome.localeCompare(item2.nome)
})
console.log(usuarios2)

//ordem decrescente
usuarios2.sort((item1, item2) => {
    return item2.nome.localeCompare(item1.nome)
})
console.log(usuarios2)