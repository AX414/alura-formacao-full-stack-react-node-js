const { getTodosLivros, getLivroPorID } = require("../services/livrosService")

function getTodosLivros(req, res) {
    try {
        const livros  = getTodosLivros()
        res.send(livros)
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function getLivro(req, res) {
    try {

        const id = req.params.id
        const livro  = getLivroPorID(id)
        res.send(livro)
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

module.exports = {
    getTodosLivros,
    getLivro
}

