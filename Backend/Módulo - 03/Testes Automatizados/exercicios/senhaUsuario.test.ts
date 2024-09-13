import senhaUsuario from "./senhaUsuario";

describe('Testes para a função senhaUsuario', () => {

    test('A senha com menos de 4 caracteres deve ser inválida', () => {
        expect(senhaUsuario('123')).toBe('SENHA INVÁLIDA');
    });

    test('a senha com caracteres alfabéticos deve ser inválida', () => {
        expect(senhaUsuario('abc123')).toBe('SENHA INVÁLIDA');
    });

    test('A senha com exatos 4 números deve ser valida', () => {
        expect(senhaUsuario('1234')).toBe('SENHA VALIDA');
    });

    test('A Senha com mais de 4 números deve ser valida', () => {
        expect(senhaUsuario('12345678')).toBe('SENHA VALIDA');
    });

    test('Senha vazia deve ser inválida', () => {
        expect(senhaUsuario('')).toBe('SENHA INVÁLIDA');
    });

});

