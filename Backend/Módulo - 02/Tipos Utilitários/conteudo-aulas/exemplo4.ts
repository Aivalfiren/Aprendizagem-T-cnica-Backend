// Pick<Tipo, Propriedades> -> Pega o typo, seleciona as propriedades que quer usar criando um typo novo
// Omit<Tipo, Propriedades> -> Ao contrario do Pick, ele seleciona as propriedades dp type origem e ao indicar as propriedades desse type
//ele exclui elas no novo type.

type TCarro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

// adiciona as propriedades em um novo tipo
type NovoCarro = Pick<TCarro, 'marca' | 'modelo' | 'ano'>

// remove as propriedades em um novo tipo
type NovoCarroOmit = Omit<TCarro, 'portas'>