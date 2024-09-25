import { OrderDetails } from 'src/order-detail/order-detail.entity';
import { v4 as uuid } from 'uuid';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InfoUser } from 'src/infoUsers/infoUsers.entity';
import { OrderStatus } from 'src/order-status/order-status.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @ManyToOne(() => InfoUser, (user) => user.cuit_cuil, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'cuit_cuil' })
  user_id: string;

  @Column({ type: 'date' })
  date: Date;

  // @OneToOne(() => ModeShipment, (modeShipment) => modeShipment.order)
  // mode_shipment: UUID;

  @ManyToOne(() => OrderStatus, (orderStatus) => orderStatus.id, {
    eager: true,
  })
  @JoinColumn({ name: 'order_status', referencedColumnName: 'id' })
  order_status: uuid;

  // @OneToOne(() => paymentStatus, (paymentStatus) => paymentStatus.order)
  // payment_status: UUID;
}
