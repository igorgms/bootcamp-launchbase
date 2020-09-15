const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", { 
    express: server,
    autoescape: false, 
    noCache: true
})

server.get('/', function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/42951527?s=400&u=c8e3a04ed95bd1f906e63c1e9569e25d5d3391ac&v=4",
        name: "Igor Gomes",
        role: "Desenvolvedor Front-end",
        description: "Desenvolvedor com experiência em HTML, CSS, sass, JavaScript(Puro e jQuery), no momento estudando e aprofundando os conhecimentos em React e React Native.",
        links: [
            { name: 'Github', url: "https://github.com/igorgms" },
            { name: 'LinkedIn', url: "https://www.linkedin.com/in/igorgomes8/" }
        ]
    }

    return res.render("about", { about })
})

server.get('/portfolio', function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function() {
    console.log('server is running')
})