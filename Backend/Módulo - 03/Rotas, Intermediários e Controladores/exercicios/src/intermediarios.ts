import { NextFunction, Request, Response } from "express";

export function validarIdade(req: Request, res: Response, next: NextFunction) {
    const { idade } = req.query;
    const idadeNumero = Number(idade);

    if (isNaN(idadeNumero)) {
        return res.send('Idade máxima inválida');
    }
    next();
}