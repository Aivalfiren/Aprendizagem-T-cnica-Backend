function senhaUsuario(senha: string): string {
    if (senha.length < 4) {
        return 'SENHA INVÁLIDA';
    } else if (isNaN(Number(senha))) {
        return 'SENHA INVÁLIDA';
    } else {
        return 'SENHA VALIDA';
    }

}

export default senhaUsuario;