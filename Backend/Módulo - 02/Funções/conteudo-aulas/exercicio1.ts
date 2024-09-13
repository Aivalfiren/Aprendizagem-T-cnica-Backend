//Declare uma variavel que armazena um objeto contendo dados de uma pessoa: nome, idade, profissão e altura.
//Faça uma função que tem um parametro. Essa função deve imprimir na tela a apresentação de uma pessoa, seguindo o modelo abaixo:
//"Olá! Meu nome é João, sou um jovem de 12 anos, 1.4m de altura e sou estudante"

const dadosPessoa = {
    nome: 'João',
    idade: 12,
    profissao: 'estudante',
    altura: 1.4
}

function cadastroPessoa(pessoa: any) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.idade}m de altura e sou ${pessoa.profissao}`)
}
cadastroPessoa(dadosPessoa)