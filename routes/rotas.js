const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/controle");

router.get("/api/buscar", (req, res) => {
  const lsitalivros = atendimentoController.buscar();
  lsitalivros
    .then((atendimentos) => res.status(200).json(atendimentos))
    .catch((error) => res.status(400).json(error.message));
});

router.get("/api/criar", (req, res) => {
  const novoLivro = req.body;
  const resposta = atendimentoController.criar(novoLivro);
  resposta
    .then((respostaCriada) => res.status(201).json(respostaCriada))
    .catch((error) => res.status(400).json(error.message));
});

router.get("/api/atualizar/:id", (req, res) => {
  const { id } = req.params;
  const resposta = atendimentoController.atualizar(id);
  res.send(resposta);
});

router.get("/api/deletar/:id", (req, res) => {
  const { id } = req.params;
  const resposta = atendimentoController.deletar(id);
  res.send(resposta);
});

module.exports = router;
