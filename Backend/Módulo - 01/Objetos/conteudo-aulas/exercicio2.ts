// Crie um sistema de distribuição de senha por ordem de chegada
// a fila será representada pelo array ['Flavia', 'João', 'Maria', 'Pedro', 'Joana', 'Ana']
// Você deve criar uma nova lista onde cada item represente um ojbeto contendo a senha e o nome da pessoa
// A senha começa sempre em 1

const fila = ['Flavia', 'João', 'Maria', 'Pedro', 'Joana', 'Ana']

const pessoas = []

for (let i = 0; i < fila.length; i++){
    pessoas[i] = {
        nome: fila[i],
        senha: i + 1
    }

} console.log(pessoas)