import { Request, Response } from "express"

export const itemProdutos = (req: Request, res: Response) => {    // os : significa os paramentros
    console.log(req.params.item)
    return res.send('O nodemon está configurado com o typescript')
}

//

const pessoas = [
    { nome: 'flavia', email: 'flavia@email.com' },
    { nome: 'livia', email: 'livia@email.com' },
    { nome: 'maria', email: 'maria@email.com' },
]

export const buscarUsuario = (req: Request, res: Response) => {
    const { email } = req.params
    const pessoa = pessoas.find((item) => {
        return item.email === email
    })
    if (!pessoa) {
        return res.send('Pessoa não encontrada')
    }

    return res.send(pessoa)
}

//

export const buscarUsuarioQuery = (req: Request, res: Response) => {
    const { email } = req.query
    if (!email) {
        return res.send('parametro não informado')
    }

    const pessoa = pessoas.find((item) => {
        return item.email === email
    })
    if (!pessoa) {
        return res.send('pessoa não encontrada')
    }

    return res.send(pessoa)
}