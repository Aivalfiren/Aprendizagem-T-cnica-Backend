// const id = setInterval(() => {
//     console.log('Olá estudantes');
//     clearInterval(id)
// }, 1000)


let contador = 10

function bomba() {
    console.log(contador);
    contador--;

    if (contador === 0) {
        console.log(contador);
        console.log('Boooooom!');
        clearInterval(id);
    }
}

const id = setInterval(bomba, 1000) 
