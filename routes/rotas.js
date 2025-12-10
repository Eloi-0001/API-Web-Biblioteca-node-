const { Router } = require("express");
const router = Router();
const atendimentoController = require("../controllers/controle");

router.get("/api/buscar", (req, res) => {
  const resposta = atendimentoController.buscar();
  res.send(resposta);
});

router.get("/api/lertodos", (req, res) => {
  res.send("todas as listas dos livros...");
});

router.get("/api/livroporid/:id", (req, res) => {
  const { id } = req.params;
  res.send("Livro especifico por id");
});

router.patch("/api/atualizar/:id", (req, res) => {
  const { id } = req.params;
  res.send("Atualizar livro...");
});

router.delete("/api/deletar/:id", (req, res) => {
  const { id } = req.params;
  res.send("Deletar livro do sistema...");
});

module.exports = router;
