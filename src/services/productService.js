import bancodados from  "../repository/mysql.js";
async function cadastrarProduto(nome,descricao,categoria,preco) {
    const sql = "INSERT INTO produtos(Nome_produto,descrição,categoria_produto,Preco) values(?,?,?,?)"

    const  informacoesProtudo = [nome,descricao,categoria,preco]
    const conexao = await bancodados.connectDB();
    await conexao.query(sql,informacoesProtudo);
    conexao.end();
}

export default {cadastrarProduto}