import express, { Application } from "express";
import { listarConvidados, filtrarIdade, mensagemConvidados } from "./controladores"
import { validarIdade } from "./intermediarios";


const app: Application = express();
const PORT = 3000;

app.get('/', mensagemConvidados);
app.get('/convidados', filtrarIdade, validarIdade);
app.get('/convidados/:id', listarConvidados);

app.listen(PORT, () =>
    console.log(`Servidor iniciado na porta ${PORT}`));


