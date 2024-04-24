import { UUID } from "crypto";
import { Column, CreateDateColumn, DeleteDateColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PautaEntity } from "./../pauta/agenda.entity";
import { StatusSessionEnum } from "./enums/status-session.enum";

export class SessionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;
    @OneToOne(() => PautaEntity, (pauta) => pauta.sessao, {cascade: true})
    pauta: PautaEntity;
    @Column({ name: 'dataHoraInicio', nullable: false })
    dataHoraInicio: Date;
    @Column({ name: 'dataHoraFim', nullable: false })
    dataHoraFim: Date;
    @Column({ name: 'status', enum: StatusSessionEnum, nullable: false })
    status: StatusSessionEnum;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;        

}
