const matrix = [[3, 6, 8], [4, 9, 23], [54, 21, 1]]

const array = matrix.reduce(function (acumulador, valorAtual, index, array) {
    return [...acumulador, ...valorAtual]
}, [])