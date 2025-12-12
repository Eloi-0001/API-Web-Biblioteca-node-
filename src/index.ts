import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import livroRoutes from "./routes/LivroRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", livroRoutes);

createConnection()
  .then(() => {
    console.log("✅ Conectado ao banco de dados");
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.log("❌ Erro ao conectar:", error);
  });