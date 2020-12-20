const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

// configura arquivos estáticos como os css's
server.use(express.static("public"));

// configuração da template engine, passado o html como a extensão de arquivos a ser lida
server.set("view engine", "njk");

// configuração do nunjucks que é a template engine, é passado a pasta views, e o express como variável do servidor que está sendo utilizado
nunjucks.configure("views", {
  express: server,
  autoescape: false
});

// criando as rotas, são passados como parâmetros uma requisição e é obtida uma resposta a cerca da requisição
server.get("/", function (req, res) {

  const about = {
    avatarUrl: "https://avatars3.githubusercontent.com/u/42951527?s=400&u=c8e3a04ed95bd1f906e63c1e9569e25d5d3391ac&v=4",
    name: "Igor Gomes Firmino",
    role: "Desenvolvedor Front-end",
    description: "Desenvolvedor de software, atuo com as linguagens: HTML, CSS(SASS) e JavaScript(jQuery). Atualmente também dedico tempo estudando sobre React e React Native.",
    links: [
      { name: "Github", url: "https://github.com/igorgms" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/igorgomes8/" }
    ]
  }

  //   renderiza o arquivo que é passado como parâmetro
  return res.render("about", { about });
});

// criando as rotas, são passados como parâmetros uma requisição e é obtida uma resposta a cerca da requisição
server.get("/portfolio", function (req, res) {
  //   renderiza o arquivo que é passado como parâmetro
  return res.render("portfolio", { items: videos });
});

// iniciando o servidor na porta 5000
server.listen(5000, function () {
  console.log("server is running");
});
