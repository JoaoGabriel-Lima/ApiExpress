const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require("./database")

/* Exemplo de Padrão Middleware
app.get("/produtos", (req, res, next) => {
    console.log("Middleware 1...")
    next()
})
*/
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProducts())
})
app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProductById(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos ({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Gerar JSON
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos ({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Gerar JSON
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // Gerar JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})