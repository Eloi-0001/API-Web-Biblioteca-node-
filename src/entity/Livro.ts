// src/entity/Livro.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    titulo: string;

    @Column({ length: 25 })
    autor: string;

    @Column({ length: 25 })
    isbn: string;

    @Column("date")
    anoPublicacao: Date;

    @Column({ default: true })
    disponivel: boolean;
}