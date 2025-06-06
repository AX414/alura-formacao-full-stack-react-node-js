const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id: 4, nome: 'Livro 4' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado ]))

console.log(JSON.parse(fs.readFileSync("livros.json")))