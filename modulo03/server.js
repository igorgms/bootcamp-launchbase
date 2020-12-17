const express = require("express");
const server = express();

// criando as rotas, são passados como parâmetros uma requisição e é obtida uma resposta a cerca da requisição
server.get("/", function (req, res) {
  return res.send("Hi!");
});

// iniciando o servidor na porta 5000
server.listen(5000, function () {
  console.log("server is running");
});
