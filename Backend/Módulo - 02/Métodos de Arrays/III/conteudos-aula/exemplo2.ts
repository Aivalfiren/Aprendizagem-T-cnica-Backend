// se a comparacão  retornar um valor negativo, o item1 vem antes do item2
// se a comparacão retornar um valor positivo, o item2 vem antes do item1
// se a comparacão retornar um valor 0, nenhum item sofre alteração

const numeros = [5, 2, 40, 21, 1, 300, 3, 4];

// ordem crescente
numeros.sort(function (item1, item2) {
    if (item1 < item2) {
        return -1;
    }
    if (item1 > item2) {
        return 1;
    }
    return 0;
})
console.log(numeros)


// ordem decrescente
const numeros2 = [5, 2, 40, 21, 1, 300, 3, 4, 2];
numeros2.sort(function (item1, item2) {
    if (item1 < item2) {
        return 1;
    }
    if (item1 > item2) {
        return -1;
    }
    return 0;
})
console.log(numeros2)


// 5-2 = 3
// 2-40 = -38
// 2-2 = 0
// ordem crescente
const numeros3 = [5, 2, 40, 21, 1, 300, 3, 4, 2];

numeros3.sort((item1, item2) => {
    return item1 - item2;
})
console.log(numeros3)


// ordem descrescente
const numeros4 = [5, 2, 40, 21, 1, 300, 3, 4, 2];
numeros4.sort((item1, item2) => {
    return item2 - item1;
})
console.log(numeros4)