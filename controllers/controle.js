const atendimentoModel = require("../model/bibliotecaModel");

class atendimentoController {
  // Método buscar: RETORNA a Promise, não lida com res/req
  buscar() {
    return atendimentoModel.listar();
  }
  
  // Método criar: RETORNA a Promise
  criar(novoLivro) {
    return atendimentoModel.criar(novoLivro);
  }
  
  // Método atualizar: implementação básica
  atualizar(id, dadosAtualizados) {
    // Por enquanto, retorna uma Promise resolvida
    return Promise.resolve({ 
      mensagem: `Livro ${id} atualizado`, 
      dados: dadosAtualizados 
    });
  }
  
  // Método deletar: implementação básica
  deletar(id) {
    // Por enquanto, retorna uma Promise resolvida
    return Promise.resolve({ 
      mensagem: `Livro ${id} deletado` 
    });
  }
}

module.exports = new atendimentoController();