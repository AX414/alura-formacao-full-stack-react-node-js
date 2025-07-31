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

        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorID(req.params.id)
            req.status(200)
            res.send(livro)
        } else {
            res.status(422)
            res.send("ID inválido.")
        }

    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function addLivro(req, res) {
    try {
        const nome = req.body.nome

        if (nome) {
            const resposta = adicionarLivro(req.body)
            if (resposta == 1) {
                res.status(201)
                res.send("Livro inserido com sucesso.")
            } else {
                res.status(409)
                res.send("Identificador duplicado.")
            }
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório.")
        }
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const resposta = deletarLivro(id)
            if (resposta == 1) {
                res.status(200)
                res.send("Livro deletado com sucesso.")
            } else {
                res.status(404)
                res.send("O identificador informado não existe.")
            }
        } else {
            res.status(422)
            res.send("ID inválido.")
        }
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const resposta = alterarLivro(req.body, id)
            if (resposta == 1) {
                res.status(200)
                res.send("Livro alterado com sucesso.")
            } else {
                res.status(404)
                res.send("O identificador informado não existe.")
            }
        } else {
            res.status(422)
            res.send("ID inválido.")
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

