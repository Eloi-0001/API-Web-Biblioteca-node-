// src/routes/livroRoutes.ts
import { Router } from "express";
import { LivroController } from "../controller/LivroController";
import { getCustomRepository } from "typeorm";
import { LivroRepository } from "../repository/LivroRepository";

const router = Router();

// Inicializa controller com repository
const livroController = new LivroController(
  getCustomRepository(LivroRepository)
);

// POST /api/livros - Criar livro
router.post("/livros", async (req, res) => {
  try {
    const livro = await livroController.criar(req.body);
    res.status(201).json(livro);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/livros - Listar todos
router.get("/livros", async (req, res) => {
  try {
    const livros = await livroController.listarTodos();
    res.status(200).json(livros);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/livros/:id - Buscar por ID
router.get("/livros/:id", async (req, res) => {
  try {
    const livro = await livroController.buscarPorId(parseInt(req.params.id));
    res.status(200).json(livro);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

// PUT /api/livros/:id - Atualizar
router.put("/livros/:id", async (req, res) => {
  try {
    const livro = await livroController.atualizar(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(livro);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/livros/:id - Deletar
router.delete("/livros/:id", async (req, res) => {
  try {
    await livroController.deletar(parseInt(req.params.id));
    res.status(204).send(); // No Content
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
