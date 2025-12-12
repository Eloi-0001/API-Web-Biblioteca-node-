const conexao = require("../dados/conexoes");

class atendimentoModel {
  listar() {
    const sql = "SELECT * FROM livro";
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
        if (error) {
          console.log("Erro no model ao listar");
          reject(error);
        } else {
          console.log("Listagem bem-sucedida no model");
          resolve(resposta);
        }
      });
    });
  }

  criar(atendimento) {
    const sql = "INSERT INTO livro SET ?";
    return new Promise((resolve, reject) => {
      // ← PROMISE ADICIONADA
      conexao.query(sql, atendimento, (error, resposta) => {
        if (error) {
          console.log("Erro no model ao criar");
          reject(error);
        } else {
          console.log("Criação bem-sucedida no model");
          resolve(resposta);
        }
      });
    });
  }
}

module.exports = new atendimentoModel();
