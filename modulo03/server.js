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
});

// criando as rotas, são passados como parâmetros uma requisição e é obtida uma resposta a cerca da requisição
server.get("/", function (req, res) {
  //   renderiza o arquivo que é passado como parâmetro
  return res.render("about");
});

// criando as rotas, são passados como parâmetros uma requisição e é obtida uma resposta a cerca da requisição
server.get("/portfolio", function (req, res) {
  //   renderiza o arquivo que é passado como parâmetro
  return res.render("portfolio");
});

// iniciando o servidor na porta 5000
server.listen(5000, function () {
  console.log("server is running");
});
