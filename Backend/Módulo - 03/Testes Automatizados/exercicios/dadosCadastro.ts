type TUsuario = {
    nome?: string,
    email?: string,
    senha?: string | number
}

function dadosCadastro(dados: TUsuario): string | boolean {
    if (!dados.nome || !dados.email || !dados.senha) {
        return 'Todos os campos são obrigatórios';
    } else {
        return true;
    }
}

export default dadosCadastro;