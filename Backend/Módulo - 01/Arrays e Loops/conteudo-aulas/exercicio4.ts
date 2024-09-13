// faça um programa que percorra uma lista de usuários para encontrar o usuario 'joão'.
// Caso encontre, imprima "encontrado", caso contrario, imprima "não encontrado"

const usuarios: string[] = ['joana', 'sabrina', 'flavia', 'joão', 'livia', 'ted']

// COMO EU FIZ:
// for (let nome of usuarios){
//     if (nome === 'joão'){
//         console.log("ENCONTRADO")
//         break
//     } else {
//         console.log("NÃO ENCONTRADO")
//         continue
//     }

// } 

// CORREÇÃO:
let encontrado: boolean = false

for (let nome of usuarios){
    if (nome === 'joão'){
        encontrado = true
    }

}

if (encontrado){
    console.log('ENCONTRADO')
} else {
    console.log('NÃO ENCONTRADO')
}
