// Dado o array de usuários abaixo, faça a ordenação dos resultados de forma crescente,
// segundo a idade de cada usuário. Após a ordenação crescente, faca a ordenação descrescente.

const usuarios = [
    { nome: 'João', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 },
    { nome: 'Rodrigo', idade: 18 }
];


// ordem crescente
usuarios.sort((item1, item2) => {
    return item1.idade - item2.idade;
})
console.log(usuarios)


// ordem decrescente
usuarios.sort((item1, item2) => {
    return item2.idade - item1.idade;
})
console.log(usuarios)