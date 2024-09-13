// Declare uma variavel que armazena um objeto contendo as seguintes propriedade:
// nome, idade, altura, temCNH e habilidades

// Depois, faça um programa que impre na tela o belo texto baixo, substituindo 
// os dados pessoais pelos dados do objeto:

// Flavia tem 24 anos, 1.68m de altura, possui CNH e as seguintes habilidades:
// - Javascript
// - PHP
// - Python
// - Java

const pessoa = {
    nome: 'Flavia',
    idade: 24,
    altura: 1.68,
    temCNH: true,
    habilidades: ['Javascript', 'PHP', 'Python', 'Java']
}

const possuiCNH = pessoa.temCNH ? 'possui CNH' : 'não possui CNH';

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${possuiCNH} e as seguintes habilidades:`);
for (let item of pessoa.habilidades){
    console.log(`- ${item}`)
}

