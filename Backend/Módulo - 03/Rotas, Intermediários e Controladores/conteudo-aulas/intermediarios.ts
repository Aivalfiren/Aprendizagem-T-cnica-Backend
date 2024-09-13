import { NextFunction, Request, Response } from "express";


export const meuPrimeiroIntermediario = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo intermediário');
    if (req.params.item === 'sair') {
        return res.send('A requisição foi respondida no intermediário, antes de chegar no controlador')
    }
    next()
}

export const intermediarioGeral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo intermediário geral');
    next()
}