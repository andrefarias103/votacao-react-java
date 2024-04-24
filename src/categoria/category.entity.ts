import { UUID } from 'crypto';
import { PautaEntity } from 'src/pauta/agenda.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    OneToMany,
    //OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export class CategoriaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 255, nullable: true })
  descricao: string;
  @OneToMany(() => PautaEntity, (pauta) => pauta.categoria, { cascade: true})
  pauta?: PautaEntity[];
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
