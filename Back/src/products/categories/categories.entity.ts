import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UUID } from 'crypto';
import { Exclude } from 'class-transformer';
import { Products } from '../product.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: UUID;

  @Column({ type: 'varchar' })
  name: string;

  @OneToOne(() => Products, (product) => product.category)
  products: Products;
}
