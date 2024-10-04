import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { Categories } from './categories/categories.entity';
import { execArgv } from 'process';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar' })
  image_url: URL;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(() => Categories, (categorie) => categorie.id, { eager: true })
  @JoinColumn({ name: 'category' })
  category: UUID;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  stock: number;
}
