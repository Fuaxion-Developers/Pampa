import { UUID } from 'crypto';
import { OrderDetails } from 'src/order-detail/order-detail.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  // @ManyToOne(() => Users, (user) => user.orders))
  // user_id: UUID;

  @Column({ type: 'date' })
  date: Date;

  // @OneToOne(() => ModeShipment, (modeShipment) => modeShipment.order)
  // mode_shipment: UUID;

  // @OneToOne(() => OrderStatus, (orderStatus) => orderStatus.order)
  // order_status: UUID;

  // @OneToOne(() => paymentStatus, (paymentStatus) => paymentStatus.order)
  // payment_status: UUID;
}
