export class BadRequestError extends Error {      // BadRequestError -> nome do erro, que significa em português "erro de requisição"
    readonly statusCode: number

    constructor(mensagem: string) {
        super(mensagem)
        this.statusCode = 400
    }
}

export class NotFoundError extends Error {       // NotFoundError -> nome do erro, que significa em português "erro de requisição"
    readonly statusCode: number

    constructor(mensagem: string) {
        super(mensagem)
        this.statusCode = 404
    }
}