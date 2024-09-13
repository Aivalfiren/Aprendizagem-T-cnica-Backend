// trim -> remove todos os espaços do inicio e do fim de uma string
// trimStart -> remove todos os espaços do inicio de uma string
// trimEnd -> remove todos os espaços do fim de uma string

const usuario = {
    email: 'flavia@email.com',
    senha: 'abcd'
}

const email = ' flavia@email.com'
const senha = 'abcd'

console.log(usuario.email === email.trim()) // ao usar o trim aqui, indico a eliminação de espaços que possa ter para descobrir se os emails são iguais
console.log(usuario.email === email.trimStart()) // tira só os espaços do inicio da string
console.log(usuario.email === email.trimEnd()) // tira só os espaços do final da string