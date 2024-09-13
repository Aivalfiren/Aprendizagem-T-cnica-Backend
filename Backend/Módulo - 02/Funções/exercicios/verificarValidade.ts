
function verificarValidade(valorLido: number, valoresValidos: number[]): boolean {
    for (let i = 0; i < valoresValidos.length; i++) {
        if (valoresValidos[i] === valorLido) {
            return true;
        }
    } return false;
}


export default verificarValidade;
