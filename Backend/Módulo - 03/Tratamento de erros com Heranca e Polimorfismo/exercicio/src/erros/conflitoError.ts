import estruturaErro from "./estrutura";

export default class conflitoError extends estruturaErro {
    constructor(mensagem: string) {
        super(409, mensagem);
    }
}