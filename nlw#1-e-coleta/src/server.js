const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db")


//configurar pasta publica
server.use(express.static("public"))


//Habilita o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))


//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//Pagina inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo"})
})

server.get("/create-point", (req, res) => {

    //req.query: Query Strings da nossa url
    //console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //re.query: O corpo do nosso formuláro
   //console.log(req.body)
    
    //inserir dados no banco de dados
   
    const query = `
        INSERT INTO place (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
        
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastro com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})

    }

    db.run(query, values, afterInsertData)
       
})


server.get("/search", (req, res) => {

    const search = req.query.search 

    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }

    //Pegar os dados do banco de dados
    db.all(`SELECT * FROM place WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
            
        }

        const total = rows.length
        console.log(rows)
        
         //Mostrar a página html  com dados do banco de dados      
        return res.render("search-results.html", { place: rows, total: total})
    })
    
})

//liga o servidor
server.listen(3000)