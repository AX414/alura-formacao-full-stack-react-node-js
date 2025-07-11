const {
    getTodosLivros,
    getLivroPorID,
    adicionarLivro,
    deletarLivro,
    alterarLivro
} = require("../services/livrosService")

function getTodos(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function getLivro(req, res) {
    try {
        const livro = getLivroPorID(req.params.id)
        req.status(200);
        res.send(livro)
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function addLivro(req, res) {
    try {
        const resposta = adicionarLivro(req.body);
        if(resposta == 1){
            res.status(201);
            res.send("Livro inserido com sucesso.");
        }else{
            res.status(409)
            res.send("Identificador duplicado.");
        }
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function deleteLivro(req, res) {
    try {
        const resposta = deletarLivro(req.params.id);
            if(resposta == 1){
            res.status(200);
            res.send("Livro deletado com sucesso.");
        }else{
            res.status(404)
            res.send("O identificador informado não existe.");
        }
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function patchLivro(req, res) {
    try {
        const resposta = alterarLivro(req.body, req.params.id);
        if(resposta == 1){
            res.status(200);
            res.send("Livro alterado com sucesso.");
        }else{
            res.status(404)
            res.send("O identificador informado não existe.");
        }
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}


module.exports = {
    getTodos,
    getLivro,
    addLivro,
    deleteLivro,
    patchLivro
}

