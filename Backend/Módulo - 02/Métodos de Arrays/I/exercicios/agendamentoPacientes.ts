function solucao(agenda: string[], cancelamento: string): string | string[] {

  const verificacao = agenda.indexOf(cancelamento);
  if (verificacao === -1) {
    return 'PACIENTE NÃO AGENDADO';
  } else {
    agenda.splice(verificacao, 1);
    return agenda;
  }

}


export default solucao;
