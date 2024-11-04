import { Categories } from 'src/products/categories/categories.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class SubCategories {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @Column()
  name: string;

  @ManyToOne(() => Categories, (categories) => categories.id, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Categories;
}
