//como criar uma função com parametro:

const usuarios = []

// function cadastrarUsuarios(nome, email, idade) { // o parametro serve como uma variavel
//     usuarios[usuarios.length] = {
//         nome, email, idade
//     }
// }
// cadastrarUsuarios('Flavia', 'flavia@email.com', 24)
// console.log(usuarios)
// cadastrarUsuarios('Livia', 'livia@email.com', 11) // para adicionar mais informações, basta chamar a função novamente e preencher os dados 
// console.log(usuarios)

function cadastrarUsuarios(usuario) {
    usuarios[usuarios.length] = {
        nome: usuario.nome,
        email: usuario.email,
        idade: usuario.idade,
    }
}
cadastrarUsuarios({
    nome: 'Flavia',
    email: 'flavia@email.com',
    idade: 24
})
console.log(usuarios)

const livia = {
    nome: 'Livia',
    email: 'livia@email.com',
    idade: 11
}
cadastrarUsuarios(livia)
console.log(usuarios)
