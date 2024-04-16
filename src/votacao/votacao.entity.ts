import { UUID } from "crypto";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class VotacaoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    @Column({ name: 'opcaoVotada', length: 3, nullable: false })
    opcaoVotada: string;
    @Column({ name: 'dataHoraVoto', length: 19, nullable: false })
    dataHoraVoto: string;    
    @OneToOne( () => UsuarioEntity, (usuario) => usuario.id)
    usuario: UsuarioEntity;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;      
}
