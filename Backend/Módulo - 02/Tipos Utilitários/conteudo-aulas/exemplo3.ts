// Readonly<Tipo> -> Esse tipo bloqueia a alteração ou reatribuição de valores a uma propriedade, deixando apaenas para leitura.

type Pessoa = {
    nome: string
    email: string
    idade?: number
}

const usuario: Readonly<Pessoa>[] = [] // em arrays
usuario[usuario.length] = {
    nome: 'Guido',
    email: 'nkjcneceroi',
    idade: 33,
}

const usuarios: Readonly<Pessoa> = { // em objetos
    nome: '',
    idade: 24,
    email: '',
}