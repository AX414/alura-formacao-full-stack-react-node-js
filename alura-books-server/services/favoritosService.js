const { getLivroPorID } = require("../services/livrosService");
const fs = require("fs");
const path = require("path");
const json = path.join(__dirname, "../jsons/favoritos.json");

function getTodosLivrosFavoritos() {
    return JSON.parse(fs.readFileSync(json));
}

function adicionarLivroFavorito(id) {
    const favoritos = JSON.parse(fs.readFileSync(json));
    const favoritosValidos = favoritos.filter(livro => livro != null);

    console.log("Favoritos atuais:", favoritosValidos);
    console.log("ID que tentou adicionar:", id);

    const jaExiste = favoritosValidos.some(livro => String(livro.id) === String(id));

    if (jaExiste) {
        console.log("Livro já existe nos favoritos!");
        return 0; // duplicado
    }

    const livroInserido = getLivroPorID(id);
    if (!livroInserido) {
        console.log(`Livro com id ${id} não encontrado no catálogo geral.`);
        return 0;
    }

    // Força o id como string antes de salvar
    livroInserido.id = String(livroInserido.id);

    const novaListaDeLivrosFavoritos = [...favoritosValidos, livroInserido];
    fs.writeFileSync(json, JSON.stringify(novaListaDeLivrosFavoritos, null, 2));

    return 1;
}

function deletarLivroFavorito(id){
    const livrosAtuais = JSON.parse(fs.readFileSync(json))
    const livrosFiltrados = livros.filter(livro=>{livro.id!==id})
    
     // Se o número de livros filtrados for igual ao total de livros, não houve remoção
    if (livrosAtuais.length === livrosFiltrados.length) {
        return 0;
    }
    
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))

    return 1;
}

module.exports = {
    getTodosLivrosFavoritos,
    adicionarLivroFavorito,
    deletarLivroFavorito,
};
