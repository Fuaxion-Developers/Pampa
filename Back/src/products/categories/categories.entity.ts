import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { Exclude } from 'class-transformer';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: UUID;

  @Column({ type: 'varchar' })
  name: string;
}
