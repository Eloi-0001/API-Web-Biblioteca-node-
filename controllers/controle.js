const atendimentoModel = require("../model/bibliotecaModel");
class atendimentoController {
  buscar() {
    const buscando = atendimentoController.buscar();
    buscando
      .then((atendimentos) => res.status(200).json(atendimentos))
      .catch((error) => res.status(400).json(error.message));
  }
  criar(novoLivro) {
    return "Criando atendimento";
  }
  atualizar(id) {
    return `Alterar Livro de número ${id}`;
  }
  deletar(id) {
    return `Deletar Livro de número ${id}`;
  }
}

module.exports = new atendimentoController();
