// every -> testa se todos os elementos do array passam pelo teste
// implementado e retorna verdadeiro ou falso

const numeros = [23, 3, 6, 87, 12, 15]
// const resultado = numeros.every((elemento) => {
//     return elemento < 100
// })

function teste(item: number) {
    return item < 100;
}

const resultado = numeros.every(teste)
console.log(resultado)