import { NextFunction, Request, Response } from "express";

const CAMPOS_OBRIGATORIOS = [
    "examinador",
    "candidato",
    "quantidade_eliminatorias",
    "quantidade_graves",
    "quantidade_medias",
    "quantidade_leves",
];

export function validacao(req: Request, res: Response, next: NextFunction): any {
    const faltando = CAMPOS_OBRIGATORIOS.filter(campo => req.body[campo] == undefined);

    if (faltando.length > 0) {
        return res.status(400).json({ mensagem: `Campo(s) obrigatório(s) não enviado(s): ${faltando.join(', ')}` });
    }

    next();
}
