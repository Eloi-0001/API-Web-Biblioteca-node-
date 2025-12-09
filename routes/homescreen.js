const { Router } = require("express");
const router = Router();

router.get("/atendimento", (req, res) => {
  res.send("Chegou aqui, estamos listando todos atendimentos...");
});

router.post("/atendimentos", (req, res)=> {
    res.send("Chegou aqui, estamos criando um novo atendimento...")
});

router.put("/atendimentos", (req, res)=> {
    res.send("Chegou aqui, estamos criando um novo atendimento...")
});

router.post("/atendimentos", (req, res)=> {
    res.send("Chegou aqui, estamos criando um novo atendimento...")
});


