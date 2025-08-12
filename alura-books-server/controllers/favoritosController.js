const {
    getTodosLivrosFavoritos,
    adicionarLivroFavorito,
    deletarLivroFavorito
} = require("../services/favoritosService")

function getTodosFavoritos(req, res) {
    try {
        const livros = getTodosLivrosFavoritos()
        res.send(livros)
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}


function addLivroFavorito(req, res) {
    try {
        const id = req.body.id

        if(id) {
            const resposta = adicionarLivroFavorito(id)
            if (resposta == 1) {
                res.status(201)
                res.send("Livro inserido com sucesso.")
            } else {
                res.status(409)
                res.send("Identificador duplicado.")
            }
        } else {
            res.status(422)
            res.send("O campo id é obrigatório.")
        }
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function deleteLivroFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const resposta = deletarLivroFavorito(id)
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

module.exports = {
    getTodosFavoritos, 
    addLivroFavorito, 
    deleteLivroFavorito
}

