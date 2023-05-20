const express = require('express');
const route = require('./route');
const path = require("path")


const server = express();

// usando template engine
server.set('view engine', 'ejs')

// Habilita os aquivos statics
server.use(express.static("public"))

// Mudando a localização da pasta views para EJS Encherga-la
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}));

//route
server.use(route);

server.listen(5000, () => console.log("RODANDO"))
