//1. declare uam variável nome e uma idade
//2. imprima a frase: Meu nome é xxx e tenho xxx anos
//3. transforme para template string

let nome = 'Flavia '
let idade = 24

let fraseCompleta = 'Meu nome é ' + nome + 'e tenho ' + idade + ' anos.';
console.log(fraseCompleta)


fraseCompleta = `Meu nome é ${nome}e tenho ${idade} anos`;
console.log(fraseCompleta)