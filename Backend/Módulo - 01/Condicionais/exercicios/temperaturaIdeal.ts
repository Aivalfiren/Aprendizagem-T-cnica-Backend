export default function solucao(cerveja: string, temperatura: number): string {
// Cerveja pilsen: de 0 a 4 ºC;
// Cerveja de trigo: 4 a 6 ºC;
// Cerveja IPA: de 7 a 10 ºC.

  if (cerveja === "pilsen") {
    if (temperatura >= 0 && temperatura <= 4) {
      return "TEMPERATURA IDEAL";
    } else {
      return "TEMPERATURA NAO IDEAL";
    }
  } else if (cerveja === "trigo") {
    if (temperatura >= 4 && temperatura <= 6) {
      return "TEMPERATURA IDEAL";
    } else {
      return "TEMPERATURA NAO IDEAL";
    }
  } else {
    if (temperatura >= 7 && temperatura <= 10) {
      return "TEMPERATURA IDEAL";
    } else {
      return "TEMPERATURA NAO IDEAL";
    }
  }
}

