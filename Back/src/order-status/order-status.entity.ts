import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class OrderStatus {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: uuid;

  @Column({ type: 'varchar' })
  status: string;
}
