import { UUID } from 'crypto';
import { Orders } from 'src/orders/order/order.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @ManyToOne(() => Orders, (order) => order.id)
  order: UUID;

  // @ManyToOne(()=> Products, (product) => product.order_detail)
  // product: UUID;

  quantity: number;

  // total: number; //? Por ahora nose si se guarda en la db ya q es un dato calculable
}
