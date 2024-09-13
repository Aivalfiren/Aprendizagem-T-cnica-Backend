import dadosCadastro from "./dadosCadastro";

describe('Testes para a função dadosCadastro', () => {

    test('Todos os campos preenchidos corretamente deve retornar true', () => {
        expect(dadosCadastro({ nome: 'Flavia', email: '@email.com', senha: '1234' })).toBe(true);
    });

    test('Se faltar email deve retonar a mensagem de erro', () => {
        expect(dadosCadastro({ nome: 'Flavia', email: '', senha: '1234' })).toBe('Todos os campos são obrigatórios');
    });

    test('Se faltar nome deve retonar a mensagem de erro', () => {
        expect(dadosCadastro({ nome: '', email: '@email.com', senha: '1234' })).toBe('Todos os campos são obrigatórios');
    });

    test('Se faltar senha deve retonar a mensagem de erro', () => {
        expect(dadosCadastro({ nome: 'Flavia', email: '@email.com', senha: '' })).toBe('Todos os campos são obrigatórios');
    });

    test('Todos os campos vazios deve retonar a mensagem de erro', () => {
        expect(dadosCadastro({ nome: '', email: '', senha: '' })).toBe('Todos os campos são obrigatórios');
    })


})