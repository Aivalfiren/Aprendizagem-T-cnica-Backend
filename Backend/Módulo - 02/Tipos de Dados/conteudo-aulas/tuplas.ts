// tupla é uma tipagem onde ao ser declarada só pode ser usada expecificamente o declarado e na ordem declarada, ex: 
let informacoes: [string, number, boolean]
informacoes = ['Flavia', 123, true]
//
let usuario: [string, number, string, 'ativo' | 'inativo']
usuario = ['Flavia', 24, 'flavia@email.com', 'ativo']
//

const useState: [string, () => any] = ['javascript', function () { console.log('Olá Pessoal') }]
const [estado, funcao] = useState
console.log(estado)
funcao()
