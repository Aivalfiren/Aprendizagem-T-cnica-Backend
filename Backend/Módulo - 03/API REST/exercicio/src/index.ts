import 'dotenv/config';
import express, { Request, Response } from 'express';
import rotas from './rotas';

const app = express();

app.use(express.json());
app.use(rotas);

app.get('/', (req: Request, res: Response) => {
    res.send("API de exames de direção");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});