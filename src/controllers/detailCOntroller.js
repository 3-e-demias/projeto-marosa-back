import express, { response } from "express";
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

rota.put("/:cod_prod", async (request,response)=>{
    let {cod_prod} = request.params;
     const {nome_produto,descricao,categoria_produto,preco} = request.body;
    
        if(nome_produto == null){
            return response.status(400).send({"message":"Este campo é obrigatorio!,nome"})
        }
        if(descricao == null){
            return response.status(400).send({"message":"Este campo é obrigatorio!,decricao"})
        }
        if(categoria_produto == null){
            return response.status(400).send({"message":"Este campo é obrigatorio!,categotia"})
        }
        if(preco == null){
            return response.status(400).send({"message":"Este campo é obrigatorio!,preço"})
        }
        //Se todos os dados forem peenchidos de maneira correta o Cadastro e realizado com sucesso
        await productService.atualizarProduto(nome_produto,descricao,categoria_produto,preco,cod_prod)
    
        //Retorna a resposa dizendo que o usuario foi cadastrado
        return response.status(201).send({"message":"Produto atualizado com sucesso!"})
})

export default rota