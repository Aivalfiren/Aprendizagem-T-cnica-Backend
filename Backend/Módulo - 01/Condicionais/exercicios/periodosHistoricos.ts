export default function solucao(ano: number): string {

  // Idade antiga: vai de 4000 anos a.C., até a queda do Império Romano do Ocidente, em 476 da era cristã;
  // Idade média: tem início depois de 476 e vai até a tomada de Constantinopla, pelos turcos otomanos, em 1453;
  // Idade moderna: tem início depois de 1453 e vai até o ano de 1789, data da Revolução Francesa;
  // Idade contemporânea: tem início após 1789 até os dias atuais.

  let idadeAntiga: number = 476
  let idadeMedia: number = 1453
  let idadeModerna: number = 1789
  let idadeContemporanea: number = 2024

  if (ano <= idadeAntiga ){
    return 'ANTIGA';

  } else if (ano <= idadeMedia){
    return 'MEDIA';

  } else if (ano <= idadeModerna){
    return 'MODERNA';

  } else{
    return 'CONTEMPORANEA';
  }

}
