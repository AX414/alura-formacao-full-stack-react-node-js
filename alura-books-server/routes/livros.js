const { Router } = require("express")
const { getLivros, getLivro } = require("../controllers/livrosController")

const router = Router()

router.get('/', getTodosLivros)

router.get('/:id', getLivro)

router.post('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo POST')
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

router.patch('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo PATCH')
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

router.delete('/', (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo DELETE')
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

module.exports = router