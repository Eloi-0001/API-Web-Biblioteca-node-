const { Router } = require("express");
const router = Router();

router.get("/AddLista", (req, res) => {
  res.send("Chegou aqui, estamos listando todos atendimentos...");
});

router.post("/EditarLista", (req, res) => {
  res.send("Chegou aqui, estamos criando um novo atendimento...");
});

router.put("/VisualizarLista/", (req, res) => {
  res.send(`Chegou aqui, estamos atualizando o atendimento...`);
});

router.delete("/RemoverLista/", (req, res) => {
  res.send(`Chegou aqui, estamos criando um novo atendimento...`);
});

module.exports = router;
