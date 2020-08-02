const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProdutos(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
function getProductById(id) {
    return produtos[id] || {}
}
function getProducts() {
    return Object.values(produtos)
}
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
module.exports = {salvarProdutos, getProductById, getProducts, excluirProduto}