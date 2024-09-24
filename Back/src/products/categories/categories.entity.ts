import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar' })
  name: string;
}
