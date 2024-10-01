import { Router } from "express";
import { cadastrarExame, listarExames, editarExame, deletarExame } from "./controladores/ContrExames";
import { validacao } from "./intermediario/validacao";

const rotas = Router();

rotas.post("/exames", validacao, cadastrarExame);
rotas.get("/exames", listarExames);
rotas.put("/exames/:id", validacao, editarExame);
rotas.delete("/exames/:id", deletarExame);


export default rotas;

