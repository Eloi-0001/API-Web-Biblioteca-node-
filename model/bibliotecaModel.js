const { response } = require("express");
const conexao = require("../dados/conexoes");
class atendimentoModel {
  listar() {
    const sql = "select * from livro";
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
        if (error) {
          console.log("Erro no model");
          reject(error);
        }
        console.log("Deu certo com o model");
        resolve(resposta);
      });
    });
  }
}

module.exports = new atendimentoModel();
