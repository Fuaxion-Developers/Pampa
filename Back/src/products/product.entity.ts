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
import { SubCategories } from 'src/subcategories/subcategory.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar' })
  image_url: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(() => Categories, (categorie) => categorie.id, { eager: true })
  @JoinColumn({ name: 'category', referencedColumnName: 'id' })
  category: Categories;

  @ManyToOne(() => SubCategories, (subCategories) => subCategories.id, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'subcategory', referencedColumnName: 'id' })
  subCategory: SubCategories;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'float' })
  height: number;

  @Column({ type: 'float' })
  width: number;
}
