const { response } = require("express");
const conexao = require("../dados/conexoes");
class atendimentoModel {
  listar() {
    const sql = "select * from livro";
    return this.conexao.query(sql, {}, (error, resposta) => {
      if (error) {
        console.log("Erro no model");
        return;
      }
      console.log("Deu certo com o model");
    });
  }
}

module.exports = new atendimentoModel();
