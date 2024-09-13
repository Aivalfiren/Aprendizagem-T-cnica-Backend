type TAluno = { matricula: string; nome: string; idade: number };

function solucao(matricula: string, nome: string, idade: number): TAluno {
  const dadosAlunos = {
    matricula: matricula,
    nome: nome,
    idade: idade,
  }
  
  return dadosAlunos

}

export default solucao;
