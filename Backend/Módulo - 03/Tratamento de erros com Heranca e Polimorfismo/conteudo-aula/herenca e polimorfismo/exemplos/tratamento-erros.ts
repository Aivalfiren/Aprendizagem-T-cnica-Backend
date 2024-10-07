// function nome(texto: any) {
// 	texto.split('/')
// }

// try {                                         // try -> tenta fazer tudo que está aqui
// 	console.log('Guido')
// 	nome(123)
// 	console.log('depois do erro')
// } catch (erro) {                             // catch -> caso algum erro aconteça, ele é capturado aqui
// 	if (erro instanceof TypeError) {
// 		console.log(erro.message)
// 	}
// 	// console.log('Erro desconhecido')
// } finally {                                  // finally -> indepente de acontecer um erro ou não, esse bloco será executado
// 	console.log('sempre será executado');
// }

try {
    console.log('Antes de lançar um erro')

    //lançar erro
    // throw 'Um erro criado por mim'           // throw -> lançar um erro para o catch
    throw new Error('o nome é obrigatório')     // throw new Error -> é uma classe do JS para criar um erro

    console.log('alguma coisa')
} catch (erro) {
    if (erro instanceof Error) {                // instanceof -> verifica se o erro é do tipo Error
        console.log(erro.message)
    }
}