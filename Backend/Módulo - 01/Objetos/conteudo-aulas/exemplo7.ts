// rest -> resto ou sobra:
const pessoas = ['flavia', 'guido', 'pedro']
const [item1, ...novoArray] = pessoas

const usuario = {
    nome: 'flavia',
    email: 'flavia@email.com',
    idade: 24,
}

const {idade, ...novoObjeto} = usuario
//console.log(idade)

// spread -> espalhamento:
const carros = ['palio', 'gol']
const novosCarros = [...carros, 'ferrari', 'fusca']   //espalhamento em uma array

const carro = {
    ano: 1990,
    cor: 'preto',
}

const carroCompleto = {          // espalhamento em um objeto
    ...carro,
    marca: 'ford',
    modelo: 'ranger'
}

console.log(carroCompleto)