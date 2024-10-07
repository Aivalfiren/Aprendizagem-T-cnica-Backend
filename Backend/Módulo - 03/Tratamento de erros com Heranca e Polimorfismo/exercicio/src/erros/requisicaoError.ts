import estruturaErro from "./estrutura";

export default class requisicaoError extends estruturaErro {
    constructor(mensagem: string) {
        super(400, mensagem)
    }
}