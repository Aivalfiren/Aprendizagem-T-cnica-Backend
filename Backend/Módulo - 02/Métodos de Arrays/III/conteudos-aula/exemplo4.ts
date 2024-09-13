const numeros = [0, 23, 45, 13, 49]

// const resultado = numeros.reduce((acumulador, valorAtual, index, array) => {
//     return acumulador + valorAtual;
// })

const resultado = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 100)