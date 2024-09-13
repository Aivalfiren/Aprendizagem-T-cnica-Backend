export default function solucao(notaAlunoA: number, notaAlunoB: number): string {

  // diferença entre o aluno1 e aluno2 deve ser menor que 1.5

  const diferenca = notaAlunoA - notaAlunoB;
  if (diferenca < 1.5) {
    return 'DUPLA VALIDA'

  } else {
    return 'DUPLA INVALIDA'
  }



}
