// De acordo com o array de professores abaixo, com suas respectivas stacks, faça o seguinte:
// a) filtrar todos os professores de backend
// b) filtrar todos os professores de frontend

type TProfessor = {
    nome: string
    stack: string
}

const professores = [
    { nome: 'Flavia', stack: 'backend' },
    { nome: 'José', stack: 'backend' },
    { nome: 'Ana', stack: 'frontend' },
    { nome: 'Paulo', stack: 'frontend' },
    { nome: 'Beatriz', stack: 'backend' },
    { nome: 'Joana', stack: 'frontend' }
]

function encontrarProfessoresBackend(professor: TProfessor) {
    return professor.stack === 'backend'
}
const backend = professores.filter(encontrarProfessoresBackend)
console.log(backend)

function encontrarProfessoresFrontend(professor: TProfessor) {
    return professor.stack === 'frontend'
}
const frontend = professores.filter(encontrarProfessoresFrontend)
console.log(frontend)