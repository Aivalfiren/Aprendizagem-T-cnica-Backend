// uma objeto dentro da array
const usuarios =[
    {
        nome: 'Flavia',
        email: 'fleite@email.com',
    },
    {
        nome: 'Sabrina',
        email: 'sabrina@email.com',
    },
    {
        nome: 'Joana',
        email: 'joana@email.com',
    }
]

for (let usuario of usuarios){
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`)
}