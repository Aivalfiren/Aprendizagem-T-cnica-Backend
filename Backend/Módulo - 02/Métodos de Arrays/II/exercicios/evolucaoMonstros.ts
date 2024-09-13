type TMonstro = {
  nome: string;
  forca: number;
  agilidade: number;
  experiencia: number;
};
function solucao(monstros: TMonstro[]): TMonstro[] {

  const pontosExperiencia = monstros.map((monstro) => {
    return {
      ...monstro,
      experiencia: monstro.experiencia + 10
    }
  })

  return pontosExperiencia

}
export default solucao;
