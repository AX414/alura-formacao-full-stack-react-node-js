const fs = require("fs");
const path = require("path");
const json = path.join(__dirname, "../jsons/livros.json");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(json));
}

function getLivroPorID(id) {
    const livros = JSON.parse(fs.readFileSync(json));
    return livros.find(livro => livro.id == id);
}

function adicionarLivro(novoLivro) {
    //Garantindo a unicidade no banco de dados
    if (getLivroPorID(novoLivro.id) == null) {
        const livros = JSON.parse(fs.readFileSync(json));
        /* 
        Usando spread para criar uma nova lista 
        com todos os itens do JSON original + 
        o livro novo
        */
        const novaListadDeLivros = [...livros, novoLivro]
        /* 
        Reescreve o livros.json de modo que a nova lista de livros 
        sobreescreva a lista dos livros anterior
        */
        fs.writeFileSync(json, JSON.stringify(novaListadDeLivros, null, 2));
        return 1;
    }else{
        return 0;
    }

}

function deletarLivro(id) {
    // Lê o conteúdo atual do arquivo JSON
    let livrosAtuais = JSON.parse(fs.readFileSync(json));

    // Filtra os livros, removendo o livro com o id fornecido
    const livrosFiltrados = livrosAtuais.filter(livro => livro.id != id);

    // Se o número de livros filtrados for igual ao total de livros, não houve remoção
    if (livrosAtuais.length === livrosFiltrados.length) {
        return 0;
    }

    // Atualiza o arquivo JSON com os livros restantes
    fs.writeFileSync(json, JSON.stringify(livrosFiltrados, null, 2));

    return 1; // Livro deletado com sucesso
}

function alterarLivro(modificacoes, id) {
    //Não é const, pois vai ter dados para modificar
    let livrosAtuais = JSON.parse(fs.readFileSync(json));
    //retorna o livro da lista onde o id seja igual o id do parâmetro
    const indiceEncontrado = livrosAtuais.findIndex(livro => livro.id == id)
    if( indiceEncontrado != null){
        /*
        Cria uma lista com todos os campos do livro do indice 
        modificado e sobreescreve com as modificações
        */
        const conteudoAlterado = {...livrosAtuais[indiceEncontrado], ...modificacoes}
        livrosAtuais[indiceEncontrado] = conteudoAlterado;
        fs.writeFileSync(json, JSON.stringify(livrosAtuais, null, 2));
        return 1;
    }else{
        return 0;
    }
}

module.exports = {
    getTodosLivros,
    getLivroPorID,
    adicionarLivro,
    deletarLivro,
    alterarLivro
};
