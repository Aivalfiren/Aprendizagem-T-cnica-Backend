import "dotenv/config";
import express, { Application } from "express";
import rotas from "./Rotas/Lendas";

const app: Application = express();

const PORTA = process.env.PORT;

app.use(express.json());

app.use(rotas);

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));