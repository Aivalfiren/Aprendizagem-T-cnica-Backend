// O sistema de uma instituição apresentou um problema ao imprimir a mensagem do saldo de um cliente. O saldo era de 1 real e o sistema estava imprimindo
// a mensagem "Seu saldo é R$ 1 reais" com o nome da moeda no plural, mas sabemos que o correto seria "1 real" e seria no plural apenas se o saldo fosse maior que 1.

// Crie um programa que receba o saldo e imprima e mensagem de saldo, de acordo com o seu valor.

const saldo: number = 1

//if (saldo <= 1){
    //console.log(' Real')

//} else {
   // console.log(' Reais')
//} ou:

const unidade = saldo === 1 ? 'Real' : 'Reais';
//console.log(unidade) ou: 
console.log (`Seu saldo é ${saldo} ${unidade}`)
