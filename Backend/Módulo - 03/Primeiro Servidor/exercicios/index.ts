import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const num1 = Number(process.env.NUM1);
const num2 = Number(process.env.NUM2);

app.get('/somar', (req: Request, res: Response) => {
    const resultado = (num1 + num2).toString();
    return res.send(`O resultado da soma é: ${resultado}`);
});

app.get('/subtrair', (req: Request, res: Response) => {
    const resultado = (num1 - num2).toString();
    return res.send(`O resultado da subtração é: ${resultado}`);
});

app.get('/multiplicar', (req: Request, res: Response) => {
    const resultado = (num1 * num2).toString();
    return res.send(`O resultado da multiplicação é: ${resultado}`);
});

app.get('/dividir', (req: Request, res: Response) => {
    const resultado = (num1 / num2).toString();
    return res.send(`O resultado da divisão é: ${resultado}`);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})


