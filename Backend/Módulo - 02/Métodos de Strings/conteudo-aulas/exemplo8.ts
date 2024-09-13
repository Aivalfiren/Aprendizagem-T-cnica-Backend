// indexOf -> retorna o indice de correspondencia em uma string
// includes -> retorna true ou false caso encontre ou não a correspondencia em uma string

const texto: string = 'Eu adoro a Cubos Academy e adoro as aulas de lógica'
console.log(texto)

const indiceDaCorrespondencia = texto.indexOf('Academy')
if (indiceDaCorrespondencia !== -1) {
    console.log('encontrou a palavra')
} else {
    console.log('não encontrou a palavra')
}
console.log(indiceDaCorrespondencia)

const existeCorrespondencia = texto.includes('flavia')
console.log(existeCorrespondencia)