// Required<tipo> -> o contrario de Parcial<tipo>, deixa tudo que é opcional em obrigatório.


type Pessoa = {
    nome: string
    email: string
    idade?: number
}

const usuarios: Pessoa[] = []

function cadastrarPessoa(pessoa: Required<Pessoa>) {
    // cadastra um usuario
}
function atualizarPessoa(pessoa: Pessoa) {
    // atualiza um usuario
}

cadastrarPessoa({
    nome: '',
    email: '',
    idade: 33
})

atualizarPessoa({
    nome: 'flavia',
    idade: 24,
    email: '',
})

usuarios[usuarios.length] = {
    nome: 'Guido',
    email: 'nkjcneceroi',
    idade: 33,
}