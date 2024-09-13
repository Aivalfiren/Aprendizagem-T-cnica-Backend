// join -> junta todos os elementos de um array e retorna uma string 

// function invertida(texto: string) {
//     const arrayPalavra = texto.split('')
//     let resultado: string = ''

//     for (const letra of arrayPalavra.reverse()) {
//         resultado += letra
//     }

//     console.log(resultado)
// }
// invertida('Cubos Academy')

function invertida(texto: string) {
    const arrayPalavra = texto.split('') // split transforma a string em array
    const resultado = arrayPalavra.reverse().join('') // join transforma array em string

    console.log(resultado)
}

invertida('Cubos Academy')