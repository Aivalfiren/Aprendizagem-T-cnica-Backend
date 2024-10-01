import { Request, Response } from "express";
import bancoDeDados from "./bancoDeDados";

export function mensagemConvidados(req: Request, res: Response) {
    return res.send('API de lista de convidados');
}

export function filtrarIdade(req: Request, res: Response) {
    const { idadeMaxima } = req.query;

    if (idadeMaxima) {
        const encontrados = bancoDeDados.filter(convidado => convidado.idade <= Number(idadeMaxima));
        return res.send(encontrados);
    };

    return res.send(bancoDeDados);

}

export function listarConvidados(req: Request, res: Response) {
    const { id } = req.params;
    const convidadoEncontrado = bancoDeDados.find(convidado => convidado.id === Number(id));

    if (!convidadoEncontrado) {
        return res.send('Convidado nao encontrado');
    }

    return res.send(convidadoEncontrado);
}
