const temIngresso: boolean = true;
const i: number = 17;
const censura: number = 16;
const estaComOsPais: boolean = true;

//Operador lógico AND - &&: Testa se todas as condições são verdadeiras

// Operador lógico OR - ||: Testa se pelo menos uma condição é verdadeira

// if (temIngresso) {
//     if (idade >= censura || estaComOsPais){
//         console.log('Pode entrar');

//     } else {
//         console.log('Barrado');
//     }

// } else {
//     console.log('Barrado');
// } ou: 

if (temIngresso && (i >= censura || estaComOsPais)) {
    console.log('Pode entrar');

} else {
    console.log('Barrado');
}