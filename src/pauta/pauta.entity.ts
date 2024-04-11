import { UUID } from "crypto";
import { CategoriaEntity } from "src/categoria/categoria.entity";
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class PautaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    @Column({ name: 'titulo', length: 100, nullable: false })
    titulo: string;
    @Column({ name: 'descricao', length: 255, nullable: true })
    descricao: string;
    //@ManyToOne( () => CategoriaEntity, (categoria) => categoria.id)
    categoria: CategoriaEntity;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;    
}
