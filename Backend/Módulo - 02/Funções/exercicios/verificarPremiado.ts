type TPessoa = {
    nome: string
    numeroCartela: number
}

function verificarPremiado(numeroSorteado: number, pessoasConcorrendo: TPessoa[]): string | undefined {
    for (let i = 0; i < pessoasConcorrendo.length; i++) {
        if (pessoasConcorrendo[i].numeroCartela === numeroSorteado) {
            return pessoasConcorrendo[i].nome;
        }
    } return undefined;
}




export default verificarPremiado;
