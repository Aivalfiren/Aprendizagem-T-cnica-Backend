// some -> testa se pelo menos um dos elementos atende a condição
// implementada e retorna verdadeiro ou falso

// const numeros = [1, 2, 3]

// const resultadoNumeros = numeros.some((item) => {
//     return item % 2 === 0;
// })

// const resultadoNumeros = numeros.some(function(item){
//     return item % 2 === 0;
// })

// function testeNumero(item: number){
//     return item % 2 === 0;
// }
// const resultadoNumeros = numeros.some(testeNumero)

// const testeNumero = (item: number) => {
//     return item % 2 === 0;
// }
// const resultadoNumeros = numeros.some(testeNumero)

// console.log(resultadoNumeros)


const pessoas = [
    {
        nome: 'Flavia',
        idade: 24
    },
    {
        nome: 'João',
        idade: 20
    },
    {
        nome: 'Ana',
        idade: 17
    }
]

const resultado = pessoas.some((pessoa) => {
    return pessoa.idade < 18;
})
console.log(resultado)

if (resultado) {
    console.log('Existe uma pessoa menor de idade na lista');
}