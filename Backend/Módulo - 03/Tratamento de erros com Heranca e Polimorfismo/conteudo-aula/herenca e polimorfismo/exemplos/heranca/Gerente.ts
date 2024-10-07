import Funcionario from "./Funcionarios";

export default class Gerente extends Funcionario {           // extends -> herda todos os métodos e propriedades da classe pai "Funcionario"
    senha: string

    constructor(senha: string, nome: string, salario: number) {
        super(nome, salario)                                 // super -> chama o construtor da classe pai "Funcionario"
        this.senha = senha
    }

    validarSenha(senha: string) {
        return this.senha === senha
    }
}