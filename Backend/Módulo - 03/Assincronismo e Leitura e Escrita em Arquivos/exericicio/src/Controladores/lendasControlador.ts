import { Request, Response } from "express";
import fs from "fs/promises";
import TBancoDeDados from "../Tipos/TBaseDeDados";
import Lenda from "../Modelos/Lenda";

export const listar = async (_req: Request, res: Response): Promise<any> => {
    const resultadoLeitura = await fs.readFile("./bancoDeDados.json");
    const bancoDeDados: TBancoDeDados = JSON.parse(resultadoLeitura.toString());
    const lendasCadastradas = bancoDeDados.lendas;
    return res.status(200).json(lendasCadastradas);
};

export const criar = async (req: Request, res: Response): Promise<any> => {
    const { titulo, origem, tipo, descricao } = req.body;

    const resultadoLeitura = await fs.readFile("./bancoDeDados.json");
    const bancoDeDados: TBancoDeDados = JSON.parse(resultadoLeitura.toString());
    const lendasCadastradas = bancoDeDados.lendas;
    const proximoId = bancoDeDados.proximoId;

    const novaLenda = new Lenda(proximoId, titulo, origem, tipo, descricao);

    lendasCadastradas.push(novaLenda);

    const novoBancoDeDados: TBancoDeDados = {
        proximoId: proximoId + 1,
        lendas: lendasCadastradas,
    };

    await fs.writeFile("./bancoDeDados.json", JSON.stringify(novoBancoDeDados));

    return res.status(201).json(novaLenda);
};