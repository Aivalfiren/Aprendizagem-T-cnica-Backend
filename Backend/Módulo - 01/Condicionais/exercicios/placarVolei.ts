export default function solucao(pontosA: number, pontosB: number): string {

// e o time A venceu o set
// Se o time B venceu o set
// Se o time A está vencendo o set (mas ainda não venceu)
// Se o time B está vencendo o set (mas ainda não venceu)
// Se o jogo está empatado

// Você deverá RETONRAR apenas um dos quatro status possíveis:
// TIME A VENCEU O SET: caso o time A tenha vencido o set
// TIME B VENCEU O SET: caso o time B tenha vencido o set
// TIME A VENCENDO: caso o time A esteja vencendo o set, mas ainda não tenha vencido
// TIME B VENCENDO: caso o time B esteja vencendo o set, mas ainda não tenha vencido
// JOGO EMPATADO: caso o jogo esteja empatado

if (pontosA >= 25 && pontosA >= pontosB + 2) {
  return 'TIME A VENCEU O SET';

} else if (pontosB >= 25 && pontosB >= pontosA + 2){
  return 'TIME B VENCEU O SET';

} else if (pontosA > pontosB){
  return 'TIME A VENCENDO';

} else if (pontosB > pontosA){
  return 'TIME B VENCENDO';

} else {
  return 'JOGO EMPATADO'
}

}
