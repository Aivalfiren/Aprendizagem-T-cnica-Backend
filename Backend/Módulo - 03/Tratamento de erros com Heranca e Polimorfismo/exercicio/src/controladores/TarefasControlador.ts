import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";
import TTarefa from "../tipos/TTarefa";
import Tarefa from "../modelos/Tarefa";
import requisicaoError from "../erros/requisicaoError";
import conflitoError from "../erros/conflitoError";
import estruturaErro from "../erros/estrutura";


export default class TarefasControlador {
  listar(_req: Request, res: Response) {
    const tarefasCadastradas = bancoDeDados.tarefas;
    return res.status(200).json(tarefasCadastradas);

  }

  criar(req: Request, res: Response) {

    try {
      const { nome, descricao } = req.body;

      if (!nome || !descricao) {
        throw new requisicaoError('Todos os campos são obrigatórios!');
      }

      const tarefaExiste: boolean = bancoDeDados.tarefas.some(
        (tarefa) => tarefa.nome === nome
      );

      if (tarefaExiste) {
        throw new conflitoError("O nome já existe");
      }

      const novaTarefa: TTarefa = new Tarefa(nome, descricao);

      bancoDeDados.tarefas.push(novaTarefa);

      return res.status(201).json(novaTarefa);

    } catch (error: any) {
      if (error instanceof estruturaErro) {
        return res.status(error.statusCode).json({ mensagem: error.message });

      }

      return res.status(500).json({ mensagem: error.message });
    }
  }
}