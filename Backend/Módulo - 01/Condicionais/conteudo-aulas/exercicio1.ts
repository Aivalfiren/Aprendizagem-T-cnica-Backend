// Escreva um programa que receba uma média escolar e imprima o resultado conforme as condições abaixo:
// Média menor que 4 -> Reprovado
// Média maior ou igual a 4 e menor que 7 -> Recuperação
// Média maior ou igual a 7 -> Aprovado 

const media: number = 9

if (media < 4){
    console.log('Reprovado')

} else if (media < 7){
    console.log('Recuperação')

} else {
    console.log('Aprovado')

}
