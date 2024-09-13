type TNome = string  // typagem de variavel
const nome: TNome = 'Flavia Leite'
console.log(nome)

type TPessoa = { nome: string, email: string, idade: number } // tipagem de objetos
const usuario: TPessoa = {
    nome: 'Ana',
    email: 'ana@email.com',
    idade: 30
}

const usuarios: TPessoa[] = [   // array de objetos
    {
        nome: 'Ana',
        email: 'ana@email.com',
        idade: 30
    }
]
