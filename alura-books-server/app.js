const express = require('express')

const rotaLivros = require("./routes/livros");
const rotaFavoritos = require("./routes/favoritos");

const cors = require("cors")

const app = express()

// configurando bodies do tipo JSON
app.use(express.json()) 
app.use(cors({origin: "*"}))

const port = 8000

app.use('/livros', rotaLivros)
app.use('/favoritos', rotaFavoritos)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})