import express from 'express';
import productController from  './controllers/productController.js';
import detailProd from './controllers/detailCOntroller.js'

const rotas = express();

rotas.use("/produtos",productController)
rotas.use("/detailProd",detailProd)
export default rotas