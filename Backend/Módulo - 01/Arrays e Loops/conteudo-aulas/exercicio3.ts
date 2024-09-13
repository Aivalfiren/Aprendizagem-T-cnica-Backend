//crie um array de números aleatorios e faça um programa que calcula é imprima na tela a soma dos itens de um array
// requisitos: usar o loop for tradicional

const numerosAleatorios: number[] = [54, 67, 51, 3566, 6433, 45667, 6433]

let resultado = 0

for (let i = 0; i < numerosAleatorios.length; i++){
    resultado = resultado + numerosAleatorios[i]
    //ou: resultado += numerosAleatorios[i]
    
}

console.log(resultado)