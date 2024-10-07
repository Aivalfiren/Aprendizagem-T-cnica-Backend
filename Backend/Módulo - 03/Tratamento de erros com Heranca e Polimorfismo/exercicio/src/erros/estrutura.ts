export default class estruturaErro extends Error {
    readonly statusCode;

    constructor(statusCode: number, mensagem: string) {
        super(mensagem);
        this.statusCode = statusCode;
    }
}
