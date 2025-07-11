const { Router } = require("express")
const { 
    getTodos, 
    getLivro, 
    addLivro, 
    deleteLivro, 
    patchLivro
} = require("../controllers/livrosController")

const router = Router()

router.get('/', getTodos)

router.get('/:id', getLivro)

router.post('/', addLivro)

router.delete('/:id', deleteLivro)

router.patch('/:id', patchLivro)

module.exports = router