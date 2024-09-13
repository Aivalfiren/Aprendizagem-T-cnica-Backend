// includes -> retorna um boolean se o elemento existir na lista

const arrayPessoas = ['Flavia', 'João', 'Maria']
console.log(arrayPessoas.includes('João'))

const arrayPessoas2 = [
    {
        nome: '',
        email: '',
    }, {
        nome: '',
        email: '',
    }, {
        nome: '',
        email: '',
    }
]
console.log(arrayPessoas2.includes({
    nome: '',
    email: '',
}))