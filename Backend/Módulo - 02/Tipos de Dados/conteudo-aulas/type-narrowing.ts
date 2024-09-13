// TypeNarrowing -> Estreitamento
// Tecnica utilizada para deixar o mais assertivo possivel um tipo utilizado

function soma(num1: number | string, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'number' && typeof num2 === 'string') { // estreitamento
        return num1 + Number(num2);
    } else if (typeof num1 === 'string' && typeof num2 === 'number') {
        return Number(num1) + num2;
    } else {
        return Number(num1) + Number(num2);  // a função Number() serve para converter qualquer tipo em number aqui
    }
} console.log(soma(3, '4'));
