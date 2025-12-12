// src/controller/LivroController.ts
import { LivroRepository } from "../repository/LivroRepository";
import { Livro } from "../entity/Livro";

export class LivroController {
    constructor(private livroRepository: LivroRepository) {}

    async criar(livroData: Partial<Livro>): Promise<Livro> {
        // LÓGICA DE NEGÓCIO AQUI (validações)
        if (!livroData.titulo || !livroData.autor) {
            throw new Error("Título e autor são obrigatórios");
        }

        const livro = this.livroRepository.create(livroData);
        return await this.livroRepository.save(livro);
    }

    async listarTodos(): Promise<Livro[]> {
        return await this.livroRepository.find();
    }

    async buscarPorId(id: number): Promise<Livro | null> {
        const livro = await this.livroRepository.findOne({ where: { id } });
        
        // Lógica de negócio: verificar se livro existe
        if (!livro) {
            throw new Error(`Livro com ID ${id} não encontrado`);
        }
        
        return livro;
    }

    async atualizar(id: number, dadosAtualizados: Partial<Livro>): Promise<Livro> {
        const livro = await this.buscarPorId(id);
        
        // Lógica de negócio: não permitir alterar ISBN se já estiver cadastrado
        if (dadosAtualizados.isbn) {
            const livroComISBN = await this.livroRepository.findOne({
                where: { isbn: dadosAtualizados.isbn }
            });
            
            if (livroComISBN && livroComISBN.id !== id) {
                throw new Error("ISBN já cadastrado para outro livro");
            }
        }
        
        Object.assign(livro, dadosAtualizados);
        return await this.livroRepository.save(livro);
    }

    async deletar(id: number): Promise<void> {
        const livro = await this.buscarPorId(id);
        
        // Lógica de negócio: não deletar se livro estiver emprestado
        if (!livro.disponivel) {
            throw new Error("Não é possível deletar um livro emprestado");
        }
        
        await this.livroRepository.remove(livro);
    }
}