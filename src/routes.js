import express from 'express';
import productController from  './controllers/productController.js';

const rotas = express();

rotas.use("/produtos",productController)

export default rotas