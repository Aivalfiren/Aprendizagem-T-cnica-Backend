import soma from './soma'

describe('Testes de soma', () => {
    test('deve verificar o resultdo de uma soma', () => {
        expect(soma(3, 8)).toBeCloseTo(11)
    })
    test('deve verificar o resultdo incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBeCloseTo(12)
    })
})

