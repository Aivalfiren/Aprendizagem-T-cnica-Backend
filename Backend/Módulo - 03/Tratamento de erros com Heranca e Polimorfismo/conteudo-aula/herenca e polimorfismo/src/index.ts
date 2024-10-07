import express from "express"
import { BadRequestError, NotFoundError } from "./erros"

const app = express()

type Usuario = {
    nome: string
    email: string
}

const usuarios: Usuario[] = []

app.use(express.json())

app.post('/usuario', (req, res): any => {
    const { nome, email } = req.body

    try {
        if (!nome) {
            throw new BadRequestError('O nome é obrigatório.')
        }

        if (!email) {
            throw new BadRequestError('O email é obrigatório.')
        }

        usuarios.push({
            nome,
            email
        })

        return res.status(201).json({ nome, email })
    } catch (error) {
        if (error instanceof BadRequestError || error instanceof NotFoundError) {
            return res.status(error.statusCode).json({
                mensagem: error.message
            })
        }

        return res.status(500).json({
            mensagem: 'Erro interno do servidor'
        })
    }
})

app.listen(3000, () => {
    console.log('Serivor inicializado!')
})