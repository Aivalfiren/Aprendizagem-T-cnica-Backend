//Faça uma função que tem um parametro chamado idade e que determina a faixa estária de uma pessoa a partir dessa idade.
// 21 anos ou menos -> jovem
// 22 a 65 anos -> adulto(a)
// 66 ou mais -> idoso(a)

//Sua função deverá retornar um string que informa se a pessoa é jovem, adulto(a) ou idoso(a)

function verificarIdade(idade: number) {
    if (idade <= 21) {
        return 'Jovem'
    } else if (idade >= 66) {
        return 'Idoso(a)'
    } else {
        return 'Adulto(a)'
    }
}
console.log(verificarIdade(22))