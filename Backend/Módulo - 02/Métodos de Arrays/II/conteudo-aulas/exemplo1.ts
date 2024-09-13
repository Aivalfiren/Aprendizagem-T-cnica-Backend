function imprimir(texto: string) {
    console.log(texto);
}

imprimir('Flavia')

const imprimirTitulo = (texto: string) => {
    console.log('Aula de arrays');
}

// executa algo, em um tempo predefinido
setTimeout(imprimirTitulo, 5000)

setTimeout(() => {
    console.log('Imprimiu a arrow function');
}, 5000)

setTimeout(function () {
    console.log('Imprimiu a function tradicional');
}, 5000)