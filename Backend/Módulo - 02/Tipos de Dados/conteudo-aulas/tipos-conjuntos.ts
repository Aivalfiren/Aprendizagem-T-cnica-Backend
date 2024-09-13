// o conjunto de tipos é quando juntamos duas tiupagem usando o operador & sozinho
// let nome: string & number // nunca vai acontecer -> never
// nome: 123

type TUsuario = {
    nome: string
    email: string
    idade: number
    numero: number
}
type TEndereco = {
    rua: string
    numero: number
    cidade: string
}

type TUsuarioEndereco = TEndereco & TUsuario // usando o operador juntamos as duas tipagens e agora é um conjunto
const usuarios: TUsuarioEndereco[] = [
    {
        nome: 'Flavia',
        email: 'flavia@email.com',
        idade: 24,
        rua: 'rua a',
        numero: 123,
        cidade: 'sp'
    }
]
