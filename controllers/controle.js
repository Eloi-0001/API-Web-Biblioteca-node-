class atendimentoController {
  buscar() {
    return "Buscando atendimento";
  }
  criar(){
    return "Criando atendimento";
  }
  atualizar(id) {
    return `Alterar Livro de número ${id}`;
  }
  deletar(id){
    return `Deletar Livro de número ${id}`
  }
}

module.exports = new atendimentoController();
