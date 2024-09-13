// Podemos juntar mais de um tipo usando o operador de separação |, ex: 
const identificador: number | string | '123' = '123'

type TPessoa = {
    nome: string
    email: string
}
type TPessoa2 = {
    nome: string
    email?: string
    idade: number
}

const usuarios: TPessoa[] | TPessoa2[] = []
usuarios[usuarios.length] = {
    nome: 'Flavia',
    idade: 24
}