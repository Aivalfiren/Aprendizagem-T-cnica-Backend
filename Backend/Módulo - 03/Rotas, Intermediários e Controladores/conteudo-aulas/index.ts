import 'dotenv/config'
import express from 'express'
import { itemProdutos } from './controladores'
import { buscarUsuario } from './controladores'
import { buscarUsuarioQuery } from './controladores'
import { intermediarioGeral, meuPrimeiroIntermediario } from './intermediarios'


const servidor = express()
servidor.use(intermediarioGeral);
servidor.get('/produtos/:item', meuPrimeiroIntermediario, itemProdutos);
servidor.get('/usuarios/:email', buscarUsuario);
servidor.get('/usuarios/', buscarUsuarioQuery);

servidor.listen(process.env.PORT);