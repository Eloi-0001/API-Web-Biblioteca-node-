class tabela {
  init(conexao) {
    this.conexao = conexao;
  }
  criarTabela() {
    const sql = `
        create table if not exists livro(
        id int auto_increment not null primary key,
        titulo varchar (25) not null,
        autor varchar (25) not null,
        isbn varchar (25) not null,
        anoPublicacao date not null,
        disponivel boolean default TRUE not null
        );

        `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Erro no banco de dados");
        console.log(error.message());
      }
    });
  }
}
