import express from "express";
import productService from "../services/productService.js";
const rota = express.Router();


rota.post("/", async (request,response)=>{
    const {nome,descricao,categoria,preco} = request.body;

    if(nome == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    if(descricao == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    if(categoria == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    if(preco == null){
        return response.status(400).send({"message":"Este campo é obrigatorio!"})
    }
    //Se todos os dados forem peenchidos de maneira correta o Cadastro e realizado com sucesso
    await productService.cadastrarProduto(nome,descricao,categoria,preco)

    //Retorna a resposa dizendo que o usuario foi cadastrado
    return response.status(201).send({"message":"Produto cadastrado com sucesso!"})
})

rota.get("/", async (request, response) => {
    try {
        const produtos = await productService.listarProdutos();
        return response.status(200).json(produtos);
    } catch (error) {
        return response.status(500).send({ message: "Erro ao listar os produtos." });
    }
});

export default rota