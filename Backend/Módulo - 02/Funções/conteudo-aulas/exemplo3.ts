//Função com retorno:

function nomeCompleto(nome, sobrenome) {
    const nomeUsuario = `${nome} ${sobrenome}`
    return nomeUsuario;
}
//console.log(nomeCompleto('Flavia', 'Leite')
const imprimir = nomeCompleto('Flavia', 'Leite');
console.log(imprimir)

//Quando precida verificar algo:
function verificaIdade(idade) {
    if (idade <= 17) {
        return 'Não [e maior de idade'
    } else {
        return 'É maior de idade'
    }
}
// console.log(verificaIdade(19))

// Arrow function é escrever uma função e atribuir a função a uma variavel e essa variavel por receber uma função se tranforma em uma outra função. ::

const verificaIdade2 = (idade) => {   // declarar a const, declarar o parametro, a seta é o arrow functions e abrir o escopo. Tanto faz usar esse ou o outro
    if (idade <= 17) {
        return 'Não é maior de idade'
    } else {
        return 'É maior de idade'
    }
}
console.log(verificaIdade2(17))