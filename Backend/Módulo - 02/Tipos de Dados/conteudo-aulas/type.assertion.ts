// Type Assertion é quando forço o typeScript a etender um tipo de algo

type TPessoa = {
    nome: string
    idade?: number // ao usar o ? estou dizendo que não é obrigatorio e ele se torna do tipo number | undefined
}

function saudacao(nome: string, idade: number) {
    console.log(`Meu nome é: ${nome}, tenho ${idade} anos`);
}
const guido: TPessoa = {
    nome: 'Guido',
    idade: 33,      // se não declarar a idade aqui o console imprimi: Meu nome é: Guido, tenho undefined anos
}
const idade = guido.idade as number  // aqui forço o typescript a aceitar o tipo number em idade (já que está typado em number | undefined)
saudacao(guido.nome, idade);

// para verificar se uma propriedade existe dentro de um objeto:
// console.log('idade' in guido) -> "in" quer dizer "em"