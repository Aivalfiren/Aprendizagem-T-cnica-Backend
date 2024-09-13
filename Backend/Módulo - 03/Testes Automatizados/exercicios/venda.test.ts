import lucroPrejuizo from "./venda";

describe('Testes para a função lucroPrejuizo', () => {

    test('Quando a venda é maior que a compra', () => {
        expect(lucroPrejuizo(100, 150)).toBe('O valor do lucro é: 50');
    });

    test('Quando a venda é menor que a compra', () => {
        expect(lucroPrejuizo(200, 150)).toBe('O valor do prejuízo é: 50');
    });

    test('Quando a venda é igual à compra', () => {
        expect(lucroPrejuizo(100, 100)).toBe('Venda a preço de custo');
    });

});