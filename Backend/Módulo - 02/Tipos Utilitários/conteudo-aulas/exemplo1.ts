// Utilitário<Tipo> -> resulta em um novo tipo manipulado
// Partial<Tipo> -> constroi um tipo com todas as propriedades type definidas como opcionais.

type Pessoa = {
    nome: string
    email: string
    idade: number
}

type PessoaOpcional = Partial<Pessoa>

const usuarios: Pessoa[] = []
function atualizarPessoa(pessoa: PessoaOpcional) { // dessa forma não preciso indicar no type pessoa que alguma propriedade seja opicional.

}
atualizarPessoa({
    nome: 'flavia',
    idade: 24
})

usuarios[usuarios.length] = {
    nome: 'Guido',
    email: 'nkjcneceroi',
    idade: 33,
}