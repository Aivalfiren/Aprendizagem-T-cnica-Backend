import { Router } from "express";
import * as lendasControlador from "../Controladores/lendasControlador";
import * as lendasIntermediario from "../Intermediario/ValidarLenda";

const rotas = Router();

rotas.get("/lendas", lendasControlador.listar);
rotas.post("/lendas", lendasIntermediario.validarCorpo, lendasControlador.criar);

export default rotas;