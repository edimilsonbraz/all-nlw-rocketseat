const express = require('express');
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)


route.post('/question/create/:room', QuestionController.create)

// Informações do form vem por essa rota
route.post('/question/:room/:question/:action', QuestionController.index)



module.exports = route





// METODO "POST" traz parametros dentro da rota vindas de um form no html
// "action" tem a rota que traz esses parametros