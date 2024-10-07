import Funcionario from "./Funcionarios";
import Gerente from "./Gerente";
import Programador from "./Programador";
import Vendedor from "./Vendedor";

const funcionario = new Funcionario('Guido', 140000)

const gerente = new Gerente('1234', 'Maria', 140000)

const vendedor = new Vendedor('João', 140000)

const programador = new Programador('José', 140000, ['javascript', 'python'])

console.log(`Eu sou ${funcionario.nome} e sou um funcionário qualquer`);
console.log(`Eu sou ${gerente.nome} e sou uma gerente. Minha senha é: ${gerente.senha}`);
vendedor.adicionarComissao(1000)
console.log(`Eu sou ${vendedor.nome} e sou um vendedor. Meu salario completo é: ${vendedor.obterSalarioCompleto()}`);
console.log(`Eu sou ${programador.nome} e sou um programador. Sei programar em: ${programador.obterLinguagens()}`);