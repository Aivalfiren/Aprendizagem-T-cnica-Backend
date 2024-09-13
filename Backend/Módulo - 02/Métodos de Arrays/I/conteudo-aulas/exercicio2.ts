// Faça uma função que recebe parâmetros do tipo string e imprime na tela essa string invertida, ou seja, de trás para frente.
// Dica: lembre-se que o metodo reverse só pode ser chamado po arrays.

function invertida(texto: string) {
    const arrayPalavra = texto.split('')
    let resultado: string = ''

    for (const letra of arrayPalavra.reverse()) {
        resultado += letra
    }

    console.log(resultado)
}

invertida('Cubos Academy')