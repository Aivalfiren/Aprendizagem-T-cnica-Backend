const listaFrutas: string[] = ['banana', 'abacaxi', 'maça', 'pera', 'uva', 'manga']

// uso do break:

// for (let item of listaFrutas){
//     if(item === 'pera'){
//         break
//     }
//     console.log(item)
// }

//uso do continue:

for (let item of listaFrutas){
    if(item === 'pera'){
        continue
    }
    console.log(item)
}