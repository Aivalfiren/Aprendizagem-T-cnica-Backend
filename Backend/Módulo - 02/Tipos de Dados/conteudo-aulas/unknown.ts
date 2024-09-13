// unknown -> desconhecido

const json: string = '{"name": "tipos-de-dados-ii"}'
const resultado = JSON.parse(json) as unknown; // aqui estamos tranformando json em JavaScript usando o comando JSON.parse() e ao usar o as (assertion) digo que
// essa condição é desconhecida. Se não determinar que é do tipo unknown o typescript automaticamente define como any, aceitando qualquer tipo, que não é recomendado.

// decobrir se o objeto json tem uma propriedade chamada name e se é do tipo string:
if (resultado !== null &&  // se o resultado é diferente de nulo
    typeof resultado === 'object' && // se o resultado é um objeto
    'name' in resultado &&  // se for um objeto, tem a propriedade name?
    resultado.name === 'string') // se tiver a propriedade name dentro do objeto é do tipo string?
{
    console.log('è um objeto com uma propriedade name do tipo string');
} else {
    console.log('formato desconhecido');
}



