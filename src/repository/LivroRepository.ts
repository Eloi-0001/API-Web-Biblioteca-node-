// src/repository/LivroRepository.ts
import { EntityRepository, Repository } from "typeorm";
import { Livro } from "../entity/Livro";

@EntityRepository(Livro)
export class LivroRepository extends Repository<Livro> {
    // Métodos customizados podem ser adicionados aqui
}