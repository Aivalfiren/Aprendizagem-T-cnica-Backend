import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import TExame from "../tipos/TExame";

export function cadastrarExame(req: Request, res: Response): any {
    const { examinador, candidato, quantidadeEliminatorias, quantidadeGraves, quantidadeMedias, quantidadeLeves } = req.body;

    const aprovado = quantidadeEliminatorias === 0 &&
        (quantidadeGraves * 3 + quantidadeMedias * 2 + quantidadeLeves * 1) <= 3;

    const novoExame: TExame = {
        id: (bancoDeDados.exames.length + 1).toString(),
        examinador,
        candidato,
        quantidadeEliminatorias,
        quantidadeGraves,
        quantidadeMedias,
        quantidadeLeves,
        aprovado,
    };

    bancoDeDados.exames.push(novoExame);
    return res.status(201).json(novoExame);
}

export function listarExames(req: Request, res: Response): any {
    const { aprovado } = req.query;
    const resultados = aprovado ?
        bancoDeDados.exames.filter(exame => exame.aprovado === (aprovado === 'true')) :
        bancoDeDados.exames;

    return res.json(resultados);
}

export function editarExame(req: Request, res: Response): any {
    const { id } = req.params;
    const exameIndex = bancoDeDados.exames.findIndex(exame => exame.id === id);

    if (exameIndex === -1) {
        return res.status(404).json({ mensagem: "Exame não encontrado." });
    }

    const { examinador, candidato, quantidadeEliminatorias, quantidadeGraves, quantidadeMedias, quantidadeLeves } = req.body;

    const aprovado = quantidadeEliminatorias === 0 &&
        (quantidadeGraves * 3 + quantidadeMedias * 2 + quantidadeLeves * 1) <= 3;

    const exameAtualizado = {
        id,
        examinador,
        candidato,
        quantidadeEliminatorias,
        quantidadeGraves,
        quantidadeMedias,
        quantidadeLeves,
        aprovado,
    };

    bancoDeDados.exames[exameIndex] = exameAtualizado;
    return res.json(exameAtualizado);
}

export function deletarExame(req: Request, res: Response): any {
    const { id } = req.params;
    const exameIndex = bancoDeDados.exames.findIndex(exame => exame.id === id);

    if (exameIndex === -1) {
        return res.status(404).json({ mensagem: "Exame não encontrado." });
    }

    bancoDeDados.exames.splice(exameIndex, 1);
    return res.status(204).send();
}
