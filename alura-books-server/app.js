const express = require('express')
const rotaLivros = require("./routes/livros");
const cors = require("cors")

const app = express()

// configurando bodies do tipo JSON
app.use(express.json()) 
app.use(cors({origin: "*"}))

const port = 8000

app.use('/livros', rotaLivros)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})