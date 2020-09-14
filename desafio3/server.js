const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const infos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', function(req, res) {
    return res.render('courses', { items:infos })
})

server.get('/about', function(req, res) {
    const about = {
        name: "Rocketseat",
        description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        courses: [
            "JavaScript", "HTML", "CSS", "Node.js", "React", "React Native"
        ],
        links: [
            { name: 'Github', url: "https://github.com/Rocketseat" },
            { name: 'Instagram', url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br" },
            { name: 'Facebook', url: "https://www.facebook.com/rocketseat/" }
        ]
    }

    return res.render('about', { about })
})

server.get('/courses', function(req, res) {
    return res.render('courses', { items: infos })
})

server.use(function(req, res) {
    return res.status(404).render("not-found")
})

server.listen(5001, function() {
    console.log('server is running')
})