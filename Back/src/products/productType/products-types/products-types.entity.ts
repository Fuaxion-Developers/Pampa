import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';

@Entity()
export class ProductsTypes {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar' })
  name: string;
}
