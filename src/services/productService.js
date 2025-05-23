import bancodados from  "../repository/mysql.js";
async function cadastrarProduto(nome,descricao,id,preco) {
    const sql = "INSERT INTO produtos(nome_produto,descricao,categoria_produto,preco) values(?,?,?,?)"

    const  informacoesProtudo = [nome,descricao,id,preco]
    const conexao = await bancodados.connectDB();
    await conexao.query(sql,informacoesProtudo);
    conexao.end();
}

async function listarProdutos() {
    const sql = "SELECT * FROM produtos";
    const conexao = await bancodados.connectDB();
    const [linhas] = await conexao.query(sql);
    conexao.end();
    return linhas;
}

async function listarProduto(cod_prod) {
    const sql = "SELECT * FROM produtos WHERE id = ?";
    const infoProd = [cod_prod];
    const conexao = await bancodados.connectDB();
    const [linhas] = await conexao.query(sql,infoProd);
    conexao.end();
    return linhas;
}

async function  atualizarProduto(nome_produto,descricao,categoria_produto,preco,cod_prod) {
    const sql = "UPDATE produtos SET nome_produto = ?, descricao = ?, categoria_produto = ?, preco = ? WHERE id = ?"
    const infoProd = [nome_produto,descricao,categoria_produto,preco,cod_prod]
    const conn = await bancodados.connectDB();
    await conn.query(sql,infoProd);
    conn.end();
}

async function listagemCategorias() {
    const sql = "SELECT * FROM categorias;"
     const conexao = await bancodados.connectDB();
    const [linhas] = await conexao.query(sql);
    conexao.end();
    return linhas;
}

export default {
    cadastrarProduto,
    listarProdutos,
    listarProduto,
    atualizarProduto,
    listagemCategorias
};
