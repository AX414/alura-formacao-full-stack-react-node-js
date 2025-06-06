const fs = require("fs")
const json = "../jsons/livros.js"

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(json))
}

function getLivroPorID(id) {
    const livros = fs.readFileSync(json)
    /*
    Cria uma lista nova a partir do filtro
    pega apenas o primeiro elemento da lista com [0]
    */
    const livroEncontrado = livros.filter(livro => livro.id === id)[0]

}

module.exports = {
    getTodosLivros,
    getLivroPorID
}