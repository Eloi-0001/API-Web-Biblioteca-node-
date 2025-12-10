const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/controle");

router.get("/api/buscar", (req, res) => {
  const resposta = atendimentoController.buscar();
  console.log(resposta);
  res.send(resposta);
});

router.get("/api/criar", (req, res) => {
  const resposta = atendimentoController.criar();
  res.send(resposta);
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
