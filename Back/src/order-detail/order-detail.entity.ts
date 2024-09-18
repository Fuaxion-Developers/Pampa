import { Orders } from 'src/orders/order/order.entity';
import { Products } from 'src/products/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @ManyToOne(() => Orders, (order) => order.id)
  order: uuid;

  @ManyToOne(() => Products, (product) => product.id)
  product: uuid;

  @Column()
  quantity: number;

  // total: number; //? Por ahora nose si se guarda en la db ya q es un dato calculable
}
