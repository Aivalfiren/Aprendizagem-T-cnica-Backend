// Crie uma função que percorra um array com nomes de arquivos.
// A função deve verificar se possui ao menos um arquivo com a extensão ".bat".
// Caso exista, deverá exibir a mensagem "vírus encontrado", caso contrário, deverá exibir a mensagem "nenhum vírus encontrado".

const arquivos = ['.ts', '.js', '.bat', '.html', '.css']

const resultado = arquivos.some((arquivo) => {
    return arquivo === '.bat'
})

if (resultado) {
    console.log('vírus encontrado')
} else {
    console.log('nenhum vírus encontrado')
}
