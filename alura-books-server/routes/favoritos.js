const { Router } = require("express")
const { 
    getTodosFavoritos, 
    addLivroFavorito, 
    deleteLivroFavorito
} = require("../controllers/favoritosController")

const router = Router()

router.get('/', getTodosFavoritos)

router.post('/:id', addLivroFavorito)

router.delete('/:id', deleteLivroFavorito)

module.exports = router