const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.use(express.static("public"))

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", function(req,res){
    res.render("index")
})

app.get("/sobre", function(req,res){
    res.render("sobre")
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})