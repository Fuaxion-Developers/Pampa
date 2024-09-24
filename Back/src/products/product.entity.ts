import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { Categories } from './categories/categories.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Categories, (categorie) => categorie.id)
  @JoinColumn({ name: 'category' })
  category: UUID;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  stock: number;
}
