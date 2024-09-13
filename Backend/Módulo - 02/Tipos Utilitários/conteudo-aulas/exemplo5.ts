// Record<Chave(s), Tipo> -> É uam opção usada quando as propriedades são de um mesmo tipo e podem ser criadas dentro do comando: 
type Pessoa = Record<'nome' | 'email' | 'senha', string>

type Usuario = {
    nome: string
    email: string
    senha: string
}

type Dupla = Record<'Jogadora1' | 'Jogadora2', Usuario>
const time1: Dupla = {
    Jogadora1: {
        nome: '',
        email: '',
        senha: '',
    },
    Jogadora2: {
        nome: '',
        email: '',
        senha: '',
    }
}