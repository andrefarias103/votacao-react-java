import { UUID } from "crypto";
import { SessionEntity } from "src/sessao/session.entity";
import { Column, CreateDateColumn, DeleteDateColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoriaEntity } from "../categoria/category.entity";

export class PautaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    @Column({ name: 'titulo', length: 100, nullable: false })
    titulo: string;
    @Column({ name: 'descricao', length: 255, nullable: true })
    descricao: string;
    @ManyToOne( () => CategoriaEntity, (categoria) => categoria.id)
    categoria: CategoriaEntity;
    @OneToOne( () => SessionEntity, (sessao) => sessao.id)
    sessao: SessionEntity;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;    
}
