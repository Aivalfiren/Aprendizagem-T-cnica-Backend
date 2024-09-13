// Tipos literais é quando definimos um tipo literal a uma propriedade, variacel ou parametro

type TCarroFord = {
    modelo: string
    marca: 'Ford'  // aqui estou definindo um tipo literal a marca, então não posso nomea-lá de outra forma
    ano: number
    cor: string
}

const carros: TCarroFord[] = []
carros[carros.length] = {
    modelo: 'Fiesta',
    cor: 'Preto',
    ano: 2020,
    marca: 'Ford'
}
