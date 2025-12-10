const { Router } = require("express");
const router = Router();

router.post("/api/criar", (req, res) => {
  res.send("cadastrar livros...");
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
