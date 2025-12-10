const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const conexao = require("./dados/conexoes");
const tabela = require("./dados/tabelas");

tabela.init(conexao);

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro");
    return;
  }
  console.log("Deu certo");
});
