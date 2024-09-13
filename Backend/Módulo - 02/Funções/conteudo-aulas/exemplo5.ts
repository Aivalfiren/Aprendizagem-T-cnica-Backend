// Tipagem de funções com objetos e retornar a função


type TUsuario = {
    nome: string
    idade: number
    email: string
}
const usuarios: TUsuario[] = []

function cadastrarUsuarios(usuario: TUsuario) {
    usuarios[usuarios.length] = usuario
    return usuario
}

const resultado = cadastrarUsuarios({
    nome: 'Flavia',
    email: 'flavia@email.com',
    idade: 24,
})

console.log(resultado);