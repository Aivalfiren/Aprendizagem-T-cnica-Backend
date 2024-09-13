// Exclude<UniãoTipos, ItensExcluidos> -> ele une tipos literais e exclui algum dos itens.

type T1 = Exclude<'a' | 'b' | 'c', 'b'> // crio a uniao de tipos tipos mas ao passar a virgula exclui um dos que indiquei.

type Transacao = 'Credito' | 'Debito' | 'Boleto' | 'Pix'

type Banco1 = Exclude<Transacao, 'Credito'>
type Banco2 = Exclude<Transacao, 'Boleto' | 'Pix'>

// A diferença entre Exclude<> e Omit<> é:
// Exclude<T, U>: É usado para criar um novo conjunto de tipos removendo tipos específicos de um conjunto de tipos.
// Omit<T, K>: É usado para criar um novo tipo de objeto removendo propriedades específicas de um tipo de objeto.

