function lucroPrejuizo(compra: number, venda: number): string {
    const resultado = venda - compra;

    if (resultado > 0) {
        return `O valor do lucro é: ${resultado}`;
    } else if (resultado < 0) {
        const prejuizo = -resultado
        return `O valor do prejuízo é: ${-resultado}`;
    } else {
        return 'Venda a preço de custo';
    }
}

export default lucroPrejuizo;