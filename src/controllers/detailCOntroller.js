import express from "express";
import productService from "../services/productService.js";
const rota = express.Router();

rota.get("/:cod_prod", async (request, response) => {

    let {cod_prod} = request.params;
    try {
        const produto = await productService.listarProduto(cod_prod);
        console.log(produto)
        return response.status(200).json(produto);
    } catch (error) {
        return response.status(500).send({ message: "Erro ao listar os produtos." });
    }
})

export default rota