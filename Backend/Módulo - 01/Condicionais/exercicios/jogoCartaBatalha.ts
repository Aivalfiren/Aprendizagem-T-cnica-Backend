export default function solucao(monstro1: number, monstro2: number): string {

// Cada jogador possui uma carta monstro na mão, que mostra a força que aquele monstro possui;
// Vence o jogo o jogador que possui o monstro mais forte;
// Caso as forças sejam iguais, há um empate. 

if (monstro1 > monstro2){
  return 'JOGADOR 1 GANHOU';

} else if (monstro2 > monstro1){
  return 'JOGADOR 2 GANHOU'

} else {
  return 'EMPATE'
}

}
