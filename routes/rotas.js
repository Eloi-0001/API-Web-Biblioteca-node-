const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/controle");

router.get("/api/buscar", (req, res) => {
  const resposta = atendimentoController.buscar();
  res.send(resposta);
});

router.get("/api/criar", (req, res) => {
  const resposta = atendimentoController.criar();
  res.send(resposta);
});

router.get("/api/atualizar/:id", (req, res) => {
  const resposta = atendimentoController.atualizar();
  res.send(resposta);
});

router.patch("/api/deletar/:id", (req, res) => {
  const resposta = atendimentoController.deletar();
  res.send(resposta);
});

module.exports = router;
