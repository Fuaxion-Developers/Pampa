import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class ModeShipment {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: uuid;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'double precision', scale: 2 })
  price: number;
}
