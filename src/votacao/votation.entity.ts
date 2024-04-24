import { UUID } from "crypto";
import { Column, CreateDateColumn, DeleteDateColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../usuario/user.entity";

export class VotationEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    @Column({ name: 'opcaoVotada', length: 3, nullable: false })
    opcaoVotada: string;
    @Column({ name: 'dataHoraVoto', length: 19, nullable: false })
    dataHoraVoto: string;    
    @OneToOne( () => UserEntity, (usuario) => usuario.id)
    usuario: UserEntity;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;      
}
