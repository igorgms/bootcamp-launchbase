// a variável express está sendo necessária para chamar o express pra dentro do server
const express = require('express')
const nunjucks = require('nunjucks')

// variavel que inicia o server com o express que foi importado
const server = express()

server.use(express.static('public'))

server.set('view engine', 'html')

nunjucks.configure('views', {
    express: server
})

// desta forma o servidor recebe um endereço, e uma função callback que recebe como parÂmetros uma requisição e uma resposta
server.get('/', function(req, res) {
    return res.render('about')
})

server.get('/portfolio', function(req, res) {
    return res.render('portfolio')
})

// servidor está sendo iniciado e o listen é necessário para "escutar" o que está acontecendo dentro do server, são passados como parâmetros o serial da porta e também uma função callback
server.listen(5000, function() {
    console.log('server is running')
})

