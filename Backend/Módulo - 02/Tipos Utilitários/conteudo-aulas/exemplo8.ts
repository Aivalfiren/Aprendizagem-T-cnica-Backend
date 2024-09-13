// Uppercase<TipoString> -> transforma todas as letras desse tipo literal em Maiusculas
// Lowercase<TipoString> ->  transforma todas as letras desse tipo literal em minusculas
// Capitalize<TipoString> -> transforma somente a primeira letra do tipo literal em maiuscula deixando as demais to jeito escrito

type TransacaoCredito = 'Credito'
type TransacaoDebito = 'dEbIto'

type Transacao = Uppercase<TransacaoCredito> | Uppercase<TransacaoDebito>
type Transacao2 = Lowercase<TransacaoCredito> | Lowercase<TransacaoDebito>
// type Transacao3 = Capitalize<TransacaoCredito> | Capitalize<TransacaoDebito> -> Caso eu queira que "dEbiTo" fique com a primeira letra maiuscula e as demais minusculas:
type Transacao3 = Capitalize<Transacao2>

const tipo: Transacao = 'CREDITO'
const tipo2: Transacao2 = 'debito'
const tipo3: Transacao3 = 'Debito'