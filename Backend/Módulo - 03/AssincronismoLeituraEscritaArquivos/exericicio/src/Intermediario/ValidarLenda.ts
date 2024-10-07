import { NextFunction, Request, Response } from "express";

export const validarCorpo = (req: Request, res: Response, next: NextFunction): any => {
    const { titulo, origem, tipo, descricao } = req.body;

    if (!titulo || !origem || !tipo || !descricao) {
        return res
            .status(400)
            .json({ mensagem: "Todos os campos são obrigatórios" });
    }

    next();
};
