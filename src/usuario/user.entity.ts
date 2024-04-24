import { UUID } from 'crypto';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VotationEntity } from '../votacao/votation.entity';

export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;
  @Column({ name: 'login', length: 100, nullable: false })
  login: string;
  @Column({ name: 'senha', length: 255, nullable: false })
  senha: string;
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'endereco', length: 255, nullable: true })
  endereco: string;
  @Column({ name: 'email', length: 70, nullable: false })
  email: string;
  @Column({ name: 'cpf', length: 14, nullable: false })
  cpf: string;
  @Column({ name: 'tipo', length: 100, nullable: false })
  tipo: string;
  @OneToMany( () => VotationEntity, (votacao) => votacao.usuario)
  votacao: VotationEntity;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
