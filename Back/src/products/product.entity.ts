import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { ProductsTypes } from './productType/products-types/products-types.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => ProductsTypes, (productType) => productType.id)
  category: UUID;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  stock: number;
}
