// Tipagem de funções com TypeScript e tipagem de retorno de funções

function nomeCompleto(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Flavia', 'Leite'));

// no arrow function:

const nomeCompleto2 = (nome: string, sobrenome: string): void => { // ao usar o "void" quero dizer que não preciso retornar tipo especifico na função
    console.log(`${nome} ${sobrenome}`)
}
nomeCompleto2('João', 'Silva');