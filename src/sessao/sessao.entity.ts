import { UUID } from "crypto";
import { PautaEntity } from "src/pauta/pauta.entity";
import { Column, CreateDateColumn, DeleteDateColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class SessaoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    @OneToOne(() => PautaEntity, (pauta) => pauta.sessao, {cascade: true})
    pauta: PautaEntity;
    @Column({ name: 'dataHoraInicio', nullable: false })
    dataHoraInicio: Date;
    @Column({ name: 'dataHoraFim', nullable: false })
    dataHoraFim: Date;
    @Column({ name: 'status', length: 100, nullable: false })
    status: string;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;        

}
